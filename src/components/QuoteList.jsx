import { useEffect, useState } from "react";

function QuoteList({ mood }) {
  const [quotes, setQuotes] = useState([]);

  useEffect(() => {
    if (!mood) return;

    // TEMP quotes (safe fallback)
    const moodQuotes = {
      happy: [
        "Happiness is a direction, not a place.",
        "Smile, it’s contagious."
      ],
      sad: [
        "Tears come from the heart and not from the brain.",
        "It’s okay to feel sad sometimes."
      ],
      relaxed: [
        "Peace comes from within.",
        "Slow down and breathe."
      ],
      angry: [
        "For every minute you are angry, you lose sixty seconds of happiness.",
        "Breathe. Let it go."
      ],
    };

    setQuotes(moodQuotes[mood] || []);
  }, [mood]);

  return (
    <div className="quotes">
      <h3>Quotes</h3>
      <ul>
        {quotes.map((quote, index) => (
          <li key={index}>{quote}</li>
        ))}
      </ul>
    </div>
  );
}

export default QuoteList;
