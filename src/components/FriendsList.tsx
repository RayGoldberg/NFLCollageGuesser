import { useState, useEffect } from 'react';
import { supabase } from '../supabaseClient';

interface Friend {
    id: string;
    username: string;
    avatar_url: string;
    stats?: {
        accuracy: number;
        total_guesses: number;
    };
}

export function FriendsList({ userId }: { userId: string }) {
    const [friends, setFriends] = useState<Friend[]>([]);
    const [newFriendUsername, setNewFriendUsername] = useState('');
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState<{ type: 'error' | 'success', text: string } | null>(null);

    useEffect(() => {
        fetchFriends();
    }, [userId]);

    const fetchFriends = async () => {
        try {
            // Get friends where current user is user_id
            const { data: friendsData, error } = await supabase
                .from('friends')
                .select(`
          friend:friend_id (
            id,
            username,
            avatar_url
          )
        `)
                .eq('user_id', userId);

            if (error) throw error;

            if (friendsData) {
                // Fetch stats for each friend
                const friendsWithStats = await Promise.all(
                    friendsData.map(async (item: any) => {
                        const friend = item.friend;
                        const { data: stats } = await supabase
                            .from('game_stats')
                            .select('accuracy, total_guesses')
                            .eq('user_id', friend.id)
                            .single();

                        return {
                            ...friend,
                            stats: stats || { accuracy: 0, total_guesses: 0 }
                        };
                    })
                );
                setFriends(friendsWithStats);
            }
        } catch (error) {
            console.error('Error fetching friends:', error);
        }
    };

    const addFriend = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setMessage(null);

        try {
            // 1. Find user by username
            const { data: users, error: userError } = await supabase
                .from('profiles')
                .select('id')
                .eq('username', newFriendUsername)
                .single();

            if (userError || !users) throw new Error('User not found');
            if (users.id === userId) throw new Error('You cannot add yourself');

            // 2. Add friendship
            const { error: friendError } = await supabase
                .from('friends')
                .insert({
                    user_id: userId,
                    friend_id: users.id
                });

            if (friendError) {
                if (friendError.code === '23505') throw new Error('Already friends');
                throw friendError;
            }

            setMessage({ type: 'success', text: 'Friend added!' });
            setNewFriendUsername('');
            fetchFriends();
        } catch (error: any) {
            setMessage({ type: 'error', text: error.message });
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="bg-slate-800 border-4 border-white p-4 shadow-xl h-full" style={{ imageRendering: 'pixelated' }}>
            <h3 className="text-white font-bold uppercase mb-4 border-b-2 border-white pb-2">Friends & Rivals</h3>

            {/* Add Friend Form */}
            <form onSubmit={addFriend} className="mb-6">
                <div className="flex gap-2">
                    <input
                        type="text"
                        value={newFriendUsername}
                        onChange={(e) => setNewFriendUsername(e.target.value)}
                        placeholder="USERNAME..."
                        className="flex-1 p-2 bg-slate-700 text-white border-2 border-slate-500 text-sm uppercase focus:border-yellow-400 outline-none"
                    />
                    <button
                        type="submit"
                        disabled={loading}
                        className="px-3 bg-blue-600 hover:bg-blue-700 text-white font-bold border-2 border-white uppercase text-xs"
                    >
                        {loading ? '...' : 'ADD'}
                    </button>
                </div>
                {message && (
                    <p className={`text-xs mt-1 ${message.type === 'error' ? 'text-red-400' : 'text-green-400'}`}>
                        {message.text}
                    </p>
                )}
            </form>

            {/* Friends List */}
            <div className="space-y-3 overflow-y-auto max-h-[300px] pr-2 custom-scrollbar">
                {friends.length === 0 ? (
                    <p className="text-slate-400 text-xs text-center py-4">No friends added yet.</p>
                ) : (
                    friends.map((friend) => (
                        <div key={friend.id} className="bg-slate-700 p-2 border-2 border-slate-600 flex items-center gap-3">
                            <img
                                src={friend.avatar_url}
                                alt={friend.username}
                                className="w-10 h-10 bg-slate-600 border border-white"
                            />
                            <div className="flex-1 min-w-0">
                                <div className="text-white font-bold text-sm truncate">{friend.username}</div>
                                <div className="text-yellow-400 text-xs font-mono">
                                    ACC: {((friend.stats?.accuracy || 0) * 100).toFixed(1)}%
                                </div>
                            </div>
                        </div>
                    ))
                )}
            </div>
        </div>
    );
}
