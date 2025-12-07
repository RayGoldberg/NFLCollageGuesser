import { useState, useEffect } from "react";
import { supabase } from "./supabaseClient";
import { Auth } from "./components/Auth";
import { FriendsList } from "./components/FriendsList";
import { GameModeSelector } from "./components/GameModeSelector";
import { ClassicMode } from "./components/ClassicMode";
import { TeamLineupMode } from "./components/TeamLineupMode";
import { TimedMode } from "./components/TimedMode";
import { PowerRankings } from "./components/PowerRankings";

type Mode = "classic" | "team" | "timed";

function App() {
  const [mode, setMode] = useState<Mode>("classic");
  const [session, setSession] = useState<any>(null);
  const [showFriends, setShowFriends] = useState(false);
  const [showRankings, setShowRankings] = useState(false);

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
    });

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });

    return () => subscription.unsubscribe();
  }, []);

  if (!session) {
    return (
      <div className="min-h-screen bg-slate-900 flex items-center justify-center p-4">
        <div className="w-full max-w-md">
          <header className="bg-gradient-to-r from-blue-700 via-red-600 to-blue-700 border-4 border-white shadow-lg mb-8">
            <div className="flex items-center justify-center gap-2 py-3 px-4">
              <h1 className="text-white text-xl md:text-2xl font-bold tracking-wider text-center px-4" style={{ textShadow: '2px 2px 0px #000' }}>
                NFL COLLEGE GUESSR
              </h1>
            </div>
          </header>
          <Auth />
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen text-white flex items-center justify-center p-4 relative">
      <div className="w-full max-w-4xl relative z-10 space-y-4">

        {/* Retro Bowl Header */}
        <header className="bg-gradient-to-r from-blue-700 via-red-600 to-blue-700 border-4 border-white shadow-lg">
          <div className="flex items-center justify-between py-3 px-4">
            <div className="flex items-center gap-2">
              <span className="text-white text-2xl">⭐</span>
              <h1 className="text-white text-xl md:text-2xl font-bold tracking-wider" style={{ textShadow: '2px 2px 0px #000' }}>
                NFL COLLEGE GUESSR
              </h1>
            </div>
            <div className="flex gap-2">
              <button
                onClick={() => setShowRankings(true)}
                className="text-xs bg-black hover:bg-slate-800 text-white px-3 py-1 border-2 border-white font-bold uppercase flex items-center gap-1"
              >
                🏆 RANKINGS
              </button>
              <button
                onClick={() => setShowFriends(true)}
                className="text-xs bg-yellow-500 hover:bg-yellow-600 text-black px-3 py-1 border-2 border-white font-bold uppercase flex items-center gap-1"
              >
                👥 Friends
              </button>
              <button
                onClick={() => supabase.auth.signOut()}
                className="text-xs bg-red-600 hover:bg-red-700 text-white px-3 py-1 border-2 border-white font-bold uppercase"
              >
                Logout
              </button>
            </div>
          </div>
        </header>

        {/* Main Content */}
        <div className="bg-slate-900/90 backdrop-blur-sm border-4 border-white shadow-xl p-4 md:p-6" style={{ imageRendering: 'pixelated' }}>
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
            <p className="text-white text-xs md:text-sm">
              Guess where NFL players went to college
            </p>
            <GameModeSelector mode={mode} onChangeMode={setMode} />
          </div>

          <main>
            {mode === "classic" ? <ClassicMode /> :
              mode === "timed" ? <TimedMode /> :
                <TeamLineupMode />}
          </main>
        </div>

        {/* Friends Modal */}
        {showFriends && (
          <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4">
            <div className="w-full max-w-md relative h-[600px] max-h-[80vh]">
              <button
                onClick={() => setShowFriends(false)}
                className="absolute -top-4 -right-4 w-8 h-8 bg-red-600 border-2 border-white text-white font-bold flex items-center justify-center rounded-full z-10 hover:bg-red-700"
              >
                X
              </button>
              <FriendsList userId={session.user.id} />
            </div>
          </div>
        )}

        {/* Power Rankings Modal */}
        {showRankings && (
          <PowerRankings userId={session.user.id} onClose={() => setShowRankings(false)} />
        )}

      </div>
    </div>
  );
}

export default App;
