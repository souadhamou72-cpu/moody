import { useState, useEffect, useRef } from 'react';
import MoodSelector from './components/MoodSelector';
import Recommendations from './components/Recommendations';

import MusicRecommendations from './components/MusicRecommendations';
import QuoteList from './components/QuoteList';
import MoviesRecommendations from './components/MoviesRecommendations';

function App() {
  const [selectedMood, setSelectedMood] = useState(null);
  const resultsRef = useRef(null);

  useEffect(() => {
    if (selectedMood && resultsRef.current) {
      resultsRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [selectedMood]);

  return (
    <div className="relative">
      <div className="sticky top-0 h-screen flex flex-col items-center justify-center bg-green-400">
        <h2 className="text-4xl">The First Title</h2>
        {/*<div className="min-h-screen bg-slate-900 text-slate-100 ">*/}
        <main className="mx-auto max-w-3xl px-4 py-16">
          <h1 className="text-3xl font-semibold tracking-tight">Moodspace</h1>
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
              <h2 className="text-4xl">Recommendations</h2>
              <Recommendations mood={selectedMood} resultsRef={resultsRef} />
            </div>
          )}
        </main>
        {/*</div>*/}
      </div>
      <div className="sticky top-0 h-screen flex flex-col items-center justify-center bg-indigo-600 text-white">
        <h2 className="text-4xl">Music Recommendation</h2>
        {selectedMood && <MusicRecommendations mood={selectedMood} />}
      </div>
      <div className="sticky top-0 h-screen flex flex-col items-center justify-center bg-purple-600 text-white">
        <h2 className="text-4xl">Quotes</h2>
        {selectedMood && <QuoteList mood={selectedMood} />}
      </div>
      <div className="sticky top-0 h-screen flex flex-col items-center justify-center bg-neutral-800 text-white">
        <h2 className="text-4xl">Movies </h2>
        {selectedMood && <MoviesRecommendations mood={selectedMood} />}
      </div>
    </div>
  );
}

export default App;
