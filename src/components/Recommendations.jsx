import { useEffect, useState } from "react";

function Recommendations({ mood }) {
  const [quotes, setQuotes] = useState([]);
  const [quote, setQuote] = useState(null);

  const moodKeywords = {
    happy: ["happy", "joy", "smile", "life", "success"],
    sad: ["sad", "pain", "loss", "alone", "tears"],
    relaxed: ["calm", "peace", "relax", "quiet", "slow"],
    angry: ["anger", "hate", "fight", "rage", "frustration"]
  };

  
  useEffect(() => {
    fetch(
      "https://raw.githubusercontent.com/JamesFT/Database-Quotes-JSON/master/quotes.json"
    )
      .then((res) => res.json())
      .then((data) => setQuotes(data))
      .catch((err) => console.error(err));
  }, []);

  
  useEffect(() => {
    if (!mood || quotes.length === 0) return;

    const filtered = quotes.filter((q) =>
      moodKeywords[mood].some((keyword) =>
        q.quoteText.toLowerCase().includes(keyword)
      )
    );

    const selected =
      filtered.length > 0
        ? filtered[Math.floor(Math.random() * filtered.length)]
        : quotes[Math.floor(Math.random() * quotes.length)];

    setQuote(selected);
  }, [mood, quotes]);

  return (
    <div>
      <h2>Recommendations for "{mood}" mood</h2>

      {!quote && <p>Loading quote...</p>}

      {quote && (
        <blockquote>
          “{quote.quoteText}”
          <br />
          <strong>— {quote.quoteAuthor || "Unknown"}</strong>
        </blockquote>
      )}
    </div>
  );
}

export default Recommendations;
