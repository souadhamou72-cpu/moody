import { Link } from 'react-router-dom';
import { useEffect } from 'react';

function Landing() {
  useEffect(() => {
    document.title = 'Moody';
  }, []);

  return (
    <div className="min-h-[100svh] flex flex-col items-center justify-center bg-gradient-to-br from-amber-100 via-rose-100 to-emerald-100 text-slate-900">
      <div className="w-full max-w-3xl px-6 text-center space-y-6">
        <p className="uppercase tracking-[0.4em] text-xs font-semibold text-slate-600">
          Welcome
        </p>
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold">
          Moody
        </h1>
        <p className="text-base sm:text-lg text-slate-700">
          Explore mood-based recommendations, music, quotes, and films in one
          immersive flow.
        </p>
        <Link
          to="/moody-insights"
          className="inline-flex items-center justify-center rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold uppercase tracking-[0.2em] text-white transition hover:bg-slate-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-900"
        >
          Enter Moody Insights
        </Link>
      </div>
    </div>
  );
}

export default Landing;
