import { useEffect, useState } from 'react';

function QuoteList({ mood }) {
  const [quotes, setQuotes] = useState([]);
  const moodQuotes = {
    happy: [
      'Happiness is a direction, not a place.',
      'Smile, it’s contagious.',
    ],
    sad: [
      'Tears come from the heart and not from the brain.',
      'It’s okay to feel sad sometimes.',
    ],
    relaxed: ['Peace comes from within.', 'Slow down and breathe.'],
    angry: [
      'For every minute you are angry, you lose sixty seconds of happiness.',
      'Breathe. Let it go.',
    ],
  };
  useEffect(() => {
    if (!mood) return;
    setQuotes(moodQuotes[mood] || []);
  }, [mood]);

  return (
    <>
      {quotes.map((quote, index) => (
        <div
          key={`${mood}-${index}`}
          className="relative flex flex-col mt-6 bg-white shadow-sm border border-slate-200 rounded-lg w-96"
        >
          <div className="p-4">
            <h5 className="mb-2 text-slate-800 text-xl font-semibold">
              Quote {index + 1}
            </h5>
            <p className="text-slate-600 leading-normal font-light">
              {quote}
            </p>
          </div>
        </div>
      ))}
    </>
  );
}

export default QuoteList;
