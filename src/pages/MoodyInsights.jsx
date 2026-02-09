import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'sonner';
import MoodSelector from '../components/MoodSelector';
import Recommendations from '../components/Recommendations';
import MusicRecommendations from '../components/MusicRecommendations';
import QuoteList from '../components/QuoteList';
import MoviesRecommendations from '../components/MoviesRecommendations';

function MoodyInsights() {
  const [selectedMood, setSelectedMood] = useState(null);
  const resultsRef = useRef(null);
  const originalBodyStyle = useRef(null);
  const lastToastAt = useRef(0);

  useEffect(() => {
    document.title = 'Moody Insights';
  }, []);

  useEffect(() => {
    if (selectedMood && resultsRef.current) {
      resultsRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [selectedMood]);

  useEffect(() => {
    if (!originalBodyStyle.current) {
      originalBodyStyle.current = {
        overflow: document.body.style.overflow,
        touchAction: document.body.style.touchAction,
      };
    }

    if (!selectedMood) {
      document.body.style.overflow = 'hidden';
      document.body.style.touchAction = 'none';
    } else {
      document.body.style.overflow =
        originalBodyStyle.current?.overflow ?? '';
      document.body.style.touchAction =
        originalBodyStyle.current?.touchAction ?? '';
    }

    return () => {
      if (originalBodyStyle.current) {
        document.body.style.overflow = originalBodyStyle.current.overflow;
        document.body.style.touchAction =
          originalBodyStyle.current.touchAction;
      }
    };
  }, [selectedMood]);

  useEffect(() => {
    if (selectedMood) {
      return undefined;
    }

    const showLockToast = () => {
      const now = Date.now();
      if (now - lastToastAt.current < 1500) return;
      lastToastAt.current = now;
      toast('Select a mood to unlock insights', {
        id: 'mood-lock',
        duration: 2000,
      });
    };

    const handleWheel = (event) => {
      if (event.cancelable) event.preventDefault();
      showLockToast();
    };

    const handleTouchMove = (event) => {
      if (event.cancelable) event.preventDefault();
      showLockToast();
    };

    const handleKeyDown = (event) => {
      const scrollKeys = [
        'ArrowDown',
        'ArrowUp',
        'PageDown',
        'PageUp',
        'Home',
        'End',
        'Space',
      ];
      if (!scrollKeys.includes(event.code)) return;
      if (event.cancelable) event.preventDefault();
      showLockToast();
    };

    window.addEventListener('wheel', handleWheel, { passive: false });
    window.addEventListener('touchmove', handleTouchMove, { passive: false });
    window.addEventListener('keydown', handleKeyDown, { passive: false });

    return () => {
      window.removeEventListener('wheel', handleWheel);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [selectedMood]);

  return (
    <div className="relative text-center">
      <div className="fixed left-4 top-4 z-[9999]">
        <Link
          to="/"
          className="inline-flex items-center justify-center rounded-full border border-slate-900/30 bg-white/90 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-slate-900 shadow-sm backdrop-blur transition hover:bg-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-900"
        >
          Back to Landing
        </Link>
      </div>
      <section className="sticky top-0 min-h-[100svh] flex flex-col items-center justify-center bg-green-400">
        <div className="w-full max-w-4xl px-4 sm:px-6">
          <main className="mx-auto max-w-3xl px-0 sm:px-2 py-10 sm:py-16">
            <h1 className="text-2xl sm:text-3xl font-semibold tracking-tight">
              Moodspace
            </h1>
            <MoodSelector
              setSelectedMood={(mood) => {
                setSelectedMood(mood);
                setTimeout(() => {
                  window.scrollTo({
                    top: window.innerHeight,
                    behavior: 'smooth',
                  });
                }, 100);
              }}
            />
            {selectedMood && (
              <div>
                <h2 className="text-2xl sm:text-3xl md:text-4xl mt-8">
                  Recommendations
                </h2>
                <Recommendations mood={selectedMood} resultsRef={resultsRef} />
              </div>
            )}
          </main>
          {/*</div>*/}
        </div>
      </section>
      <section className="sticky top-0 min-h-[100svh] flex flex-col items-center justify-center bg-indigo-600 text-white">
        <div className="w-full max-w-4xl px-4 sm:px-6 flex flex-col items-center gap-4">
          <h2 className="text-2xl sm:text-3xl md:text-4xl">
            Music Recommendation
          </h2>
          {selectedMood && <MusicRecommendations mood={selectedMood} />}
        </div>
      </section>
      <section className="sticky top-0 min-h-[100svh] flex flex-col items-center justify-center bg-purple-600 text-white">
        <div className="w-full max-w-4xl px-4 sm:px-6 flex flex-col items-center gap-4">
          <h2 className="text-2xl sm:text-3xl md:text-4xl">Quotes</h2>
          {selectedMood && <QuoteList mood={selectedMood} />}
        </div>
      </section>
      <section className="sticky top-0 min-h-[100svh] flex flex-col items-center justify-center bg-neutral-800 text-white">
        <div className="w-full max-w-5xl px-4 sm:px-6 flex flex-col items-center gap-4">
          <h2 className="text-2xl sm:text-3xl md:text-4xl">Movies</h2>
          {selectedMood && <MoviesRecommendations mood={selectedMood} />}
        </div>
      </section>
    </div>
  );
}

export default MoodyInsights;
