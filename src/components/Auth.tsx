import { useState } from 'react';
import { supabase } from '../supabaseClient';

export function Auth() {
    const [loading, setLoading] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [username, setUsername] = useState('');
    const [isSignUp, setIsSignUp] = useState(false);
    const [message, setMessage] = useState<{ type: 'error' | 'success', text: string } | null>(null);

    const handleAuth = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setMessage(null);

        try {
            if (isSignUp) {
                const { error } = await supabase.auth.signUp({
                    email,
                    password,
                    options: {
                        data: {
                            username,
                            avatar_url: `https://api.dicebear.com/7.x/avataaars/svg?seed=${username}`,
                        },
                    },
                });
                if (error) throw error;
                setMessage({ type: 'success', text: 'Check your email for the login link!' });
            } else {
                const { error } = await supabase.auth.signInWithPassword({
                    email,
                    password,
                });
                if (error) throw error;
            }
        } catch (error: any) {
            setMessage({ type: 'error', text: error.message });
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="max-w-md mx-auto mt-10 p-6 bg-slate-800 border-4 border-white shadow-xl" style={{ imageRendering: 'pixelated' }}>
            <h2 className="text-2xl text-white font-bold mb-6 text-center uppercase">
                {isSignUp ? 'Create Player' : 'Player Login'}
            </h2>

            {message && (
                <div className={`p-3 mb-4 text-sm font-bold ${message.type === 'error' ? 'bg-red-500 text-white' : 'bg-green-500 text-white'}`}>
                    {message.text}
                </div>
            )}

            <form onSubmit={handleAuth} className="space-y-4">
                <div>
                    <label className="block text-white text-xs font-bold uppercase mb-1">Email</label>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full p-2 bg-slate-700 text-white border-2 border-slate-500 focus:border-yellow-400 outline-none"
                        required
                    />
                </div>

                <div>
                    <label className="block text-white text-xs font-bold uppercase mb-1">Password</label>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="w-full p-2 bg-slate-700 text-white border-2 border-slate-500 focus:border-yellow-400 outline-none"
                        required
                    />
                </div>

                {isSignUp && (
                    <div>
                        <label className="block text-white text-xs font-bold uppercase mb-1">Username</label>
                        <input
                            type="text"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            className="w-full p-2 bg-slate-700 text-white border-2 border-slate-500 focus:border-yellow-400 outline-none"
                            required={isSignUp}
                            minLength={3}
                        />
                    </div>
                )}

                <button
                    type="submit"
                    disabled={loading}
                    className="w-full py-3 bg-green-600 hover:bg-green-700 text-white font-bold border-2 border-white uppercase transition disabled:opacity-50"
                >
                    {loading ? 'Loading...' : isSignUp ? 'Sign Up' : 'Login'}
                </button>
            </form>

            <div className="mt-4 text-center">
                <button
                    onClick={() => {
                        setIsSignUp(!isSignUp);
                        setMessage(null);
                    }}
                    className="text-yellow-400 hover:text-yellow-300 text-sm font-bold uppercase underline"
                >
                    {isSignUp ? 'Already have an account? Login' : 'Need an account? Sign Up'}
                </button>
            </div>
        </div>
    );
}
