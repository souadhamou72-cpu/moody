function MoodSelector({ setSelectedMood }) {
  const moods = ["happy", "sad", "relaxed", "angry"];

  return (
    <div className="mood-selector">
      <h2>Select your mood:</h2>

      <div className="mood-buttons">
        {moods.map((mood) => (
          <button
            key={mood}
            className="mood-btn"
            onClick={() => setSelectedMood(mood)}
          >
            {mood}
          </button>
        ))}
      </div>
    </div>
  );
}

export default MoodSelector;
