import { useState, useEffect } from 'react';
import { supabase } from '../supabaseClient';

interface Ranking {
    id: string;
    username: string;
    avatar_url: string;
    timed_highscore: number;
}

export function PowerRankings({ userId, onClose }: { userId: string; onClose: () => void }) {
    const [rankings, setRankings] = useState<Ranking[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchRankings();
    }, [userId]);

    const fetchRankings = async () => {
        try {
            // 1. Get user's own stats
            const { data: myProfile } = await supabase
                .from('profiles')
                .select('username, avatar_url')
                .eq('id', userId)
                .single();

            const { data: myStats } = await supabase
                .from('game_stats')
                .select('timed_highscore')
                .eq('user_id', userId)
                .single();

            const myEntry: Ranking = {
                id: userId,
                username: myProfile?.username || 'You',
                avatar_url: myProfile?.avatar_url || '',
                timed_highscore: myStats?.timed_highscore || 0
            };

            // 2. Get accepted friends' stats
            // Query for friends where (user_id=me OR friend_id=me) AND status='accepted'
            const { data: friendsData } = await supabase
                .from('friends')
                .select(`
                    user_id,
                    friend_id,
                    user:user_id (id, username, avatar_url),
                    friend:friend_id (id, username, avatar_url)
                `)
                .or(`user_id.eq.${userId},friend_id.eq.${userId}`)
                .eq('status', 'accepted');

            let friendsEntries: Ranking[] = [];

            if (friendsData) {
                friendsEntries = await Promise.all(
                    friendsData.map(async (item: any) => {
                        // Determine which profile is the "friend"
                        const isUserInitiator = item.user_id === userId;
                        const friendProfile = isUserInitiator ? item.friend : item.user;

                        const { data: stats } = await supabase
                            .from('game_stats')
                            .select('timed_highscore')
                            .eq('user_id', friendProfile.id)
                            .single();

                        return {
                            id: friendProfile.id,
                            username: friendProfile.username,
                            avatar_url: friendProfile.avatar_url,
                            timed_highscore: stats?.timed_highscore || 0
                        };
                    })
                );
            }

            // 3. Combine and sort
            const allRankings = [myEntry, ...friendsEntries].sort((a, b) => b.timed_highscore - a.timed_highscore);
            setRankings(allRankings);

        } catch (error) {
            console.error('Error fetching rankings:', error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4">
            <div className="w-full max-w-md bg-slate-900 border-4 border-white shadow-2xl relative" style={{ imageRendering: 'pixelated' }}>
                {/* Header */}
                <div className="bg-black p-4 border-b-4 border-white flex justify-between items-center">
                    <h2 className="text-2xl font-bold text-white uppercase tracking-widest">Power Rankings</h2>
                    <button
                        onClick={onClose}
                        className="text-white hover:text-red-500 font-bold text-xl"
                    >
                        X
                    </button>
                </div>

                {/* List */}
                <div className="p-4 max-h-[60vh] overflow-y-auto custom-scrollbar space-y-2">
                    {loading ? (
                        <div className="text-white text-center py-8">Loading...</div>
                    ) : (
                        rankings.map((rank, index) => (
                            <div
                                key={rank.id}
                                className={`flex items-center p-3 border-2 ${rank.id === userId ? 'bg-slate-800 border-yellow-400' : 'bg-slate-800 border-white'
                                    }`}
                            >
                                <div className="w-8 text-xl font-bold text-slate-400">#{index + 1}</div>
                                <img
                                    src={rank.avatar_url}
                                    alt={rank.username}
                                    className="w-10 h-10 border-2 border-white mr-3"
                                />
                                <div className="flex-1">
                                    <div className="text-white font-bold uppercase">{rank.username}</div>
                                </div>
                                <div className="text-2xl font-bold text-yellow-400">{rank.timed_highscore}</div>
                            </div>
                        ))
                    )}
                </div>
            </div>
        </div>
    );
}
