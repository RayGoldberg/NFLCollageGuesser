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

interface FriendRequest {
    id: string; // The friendship row id
    user: {
        id: string;
        username: string;
        avatar_url: string;
    };
}

export function FriendsList({ userId }: { userId: string }) {
    const [friends, setFriends] = useState<Friend[]>([]);
    const [requests, setRequests] = useState<FriendRequest[]>([]);
    const [newFriendUsername, setNewFriendUsername] = useState('');
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState<{ type: 'error' | 'success', text: string } | null>(null);

    useEffect(() => {
        fetchData();
    }, [userId]);

    const fetchData = async () => {
        await Promise.all([fetchFriends(), fetchRequests()]);
    };

    const fetchRequests = async () => {
        try {
            // Incoming requests: friend_id is me, status is pending
            const { data, error } = await supabase
                .from('friends')
                .select(`
                    id,
                    user:user_id (
                        id,
                        username,
                        avatar_url
                    )
                `)
                .eq('friend_id', userId)
                .eq('status', 'pending');

            if (error) throw error;
            setRequests((data || []).map((item: any) => ({
                id: item.id,
                user: Array.isArray(item.user) ? item.user[0] : item.user
            })));
        } catch (error) {
            console.error('Error fetching requests:', error);
        }
    };

    const fetchFriends = async () => {
        try {
            // Accepted friends: (user_id is me OR friend_id is me) AND status is accepted
            const { data: friendsData, error } = await supabase
                .from('friends')
                .select(`
                    user_id,
                    friend_id,
                    user:user_id (id, username, avatar_url),
                    friend:friend_id (id, username, avatar_url)
                `)
                .or(`user_id.eq.${userId},friend_id.eq.${userId}`)
                .eq('status', 'accepted');

            if (error) throw error;

            if (friendsData) {
                const processedFriends = await Promise.all(
                    friendsData.map(async (item: any) => {
                        // Determine which profile is the "friend" (the other person)
                        const isUserInitiator = item.user_id === userId;
                        const friendProfile = isUserInitiator ? item.friend : item.user;

                        // Fetch stats for the friend
                        const { data: stats } = await supabase
                            .from('game_stats')
                            .select('accuracy, total_guesses')
                            .eq('user_id', friendProfile.id)
                            .single();

                        return {
                            id: friendProfile.id,
                            username: friendProfile.username,
                            avatar_url: friendProfile.avatar_url,
                            stats: stats || { accuracy: 0, total_guesses: 0 }
                        };
                    })
                );
                // Deduplicate by ID
                const uniqueFriends = processedFriends.filter((friend, index, self) =>
                    index === self.findIndex((t) => t.id === friend.id)
                );
                setFriends(uniqueFriends);
            }
        } catch (error) {
            console.error('Error fetching friends:', error);
        }
    };

    const sendFriendRequest = async (e: React.FormEvent) => {
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

            // 2. Check if friendship already exists (in either direction)
            // We can just try insert and handle unique constraint, but logic is complex with bidirectional check.
            // Let's just insert. If it fails, we catch it.
            // Note: Unique constraint is on (user_id, friend_id). 
            // If A adds B, row is (A, B). If B adds A, row is (B, A).
            // We should ideally check if (B, A) exists too.

            const { data: existing } = await supabase
                .from('friends')
                .select('id')
                .or(`and(user_id.eq.${userId},friend_id.eq.${users.id}),and(user_id.eq.${users.id},friend_id.eq.${userId})`)
                .maybeSingle();

            if (existing) throw new Error('Friendship request already exists or you are already friends');

            // 3. Add friendship request
            const { error: friendError } = await supabase
                .from('friends')
                .insert({
                    user_id: userId,
                    friend_id: users.id,
                    status: 'pending'
                });

            if (friendError) throw friendError;

            setMessage({ type: 'success', text: 'Request sent!' });
            setNewFriendUsername('');
            fetchData();
        } catch (error: any) {
            setMessage({ type: 'error', text: error.message });
        } finally {
            setLoading(false);
        }
    };

    const handleResponse = async (requestId: string, accept: boolean) => {
        try {
            if (accept) {
                await supabase
                    .from('friends')
                    .update({ status: 'accepted' })
                    .eq('id', requestId);
            } else {
                await supabase
                    .from('friends')
                    .delete()
                    .eq('id', requestId);
            }
            fetchData();
        } catch (error) {
            console.error('Error handling request:', error);
        }
    };

    return (
        <div className="bg-slate-800 border-4 border-white p-4 shadow-xl h-full flex flex-col" style={{ imageRendering: 'pixelated' }}>
            <h3 className="text-white font-bold uppercase mb-4 border-b-2 border-white pb-2">Friends & Rivals</h3>

            {/* Add Friend Form */}
            <form onSubmit={sendFriendRequest} className="mb-6">
                <div className="flex gap-2">
                    <input
                        type="text"
                        value={newFriendUsername}
                        onChange={(e) => setNewFriendUsername(e.target.value)}
                        placeholder="USERNAME..."
                        className="flex-1 p-2 bg-slate-700 text-white border-2 border-slate-500 text-sm focus:border-yellow-400 outline-none"
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

            {/* Friend Requests */}
            {requests.length > 0 && (
                <div className="mb-4">
                    <h4 className="text-yellow-400 text-xs font-bold uppercase mb-2">Requests</h4>
                    <div className="space-y-2">
                        {requests.map((req) => (
                            <div key={req.id} className="bg-slate-700 p-2 border-2 border-yellow-400 flex items-center justify-between">
                                <span className="text-white text-sm font-bold">{req.user.username}</span>
                                <div className="flex gap-1">
                                    <button
                                        onClick={() => handleResponse(req.id, true)}
                                        className="bg-green-500 text-white p-1 text-xs border border-white hover:bg-green-600"
                                    >
                                        ✔
                                    </button>
                                    <button
                                        onClick={() => handleResponse(req.id, false)}
                                        className="bg-red-500 text-white p-1 text-xs border border-white hover:bg-red-600"
                                    >
                                        ✖
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            )}

            {/* Friends List */}
            <div className="flex-1 overflow-y-auto min-h-0 custom-scrollbar">
                <h4 className="text-slate-400 text-xs font-bold uppercase mb-2">Your Friends</h4>
                <div className="space-y-3 pr-2">
                    {friends.length === 0 ? (
                        <p className="text-slate-500 text-xs text-center py-4">No friends added yet.</p>
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
        </div>
    );
}
