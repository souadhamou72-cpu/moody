import { useState, useEffect, useRef } from 'react';
import MoodSelector from '../components/MoodSelector';
import Recommendations from '../components/Recommendations';
import MusicRecommendations from '../components/MusicRecommendations';
import QuoteList from '../components/QuoteList';
import MoviesRecommendations from '../components/MoviesRecommendations';

function MoodyInsights() {
  const [selectedMood, setSelectedMood] = useState(null);
  const resultsRef = useRef(null);

  useEffect(() => {
    document.title = 'Moody Insights';
  }, []);

  useEffect(() => {
    if (selectedMood && resultsRef.current) {
      resultsRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [selectedMood]);

  return (
    <div className="relative text-center">
      <section className="sticky top-0 min-h-[100svh] flex flex-col items-center justify-center bg-green-400">
        <div className="w-full max-w-4xl px-4 sm:px-6">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold">
            The First Title
          </h2>
          {/*<div className="min-h-screen bg-slate-900 text-slate-100 ">*/}
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
