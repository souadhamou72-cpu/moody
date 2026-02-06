function MoodSelector({ setSelectedMood }) {
  const moods = ['happy', 'sad', 'relaxed', 'angry'];

  return (
    <div>
      <h2>Select your mood:</h2>

      <div className="flex flex-wrap justify-center gap-4">
        {moods.map((mood) => (
          <button
            key={mood}
            onClick={() => {
              setSelectedMood(mood);
            }}
            className="
  inline-flex items-center justify-center
  rounded-lg px-5 py-2.5
  border border-slate-700
  text-slate-200
  hover:bg-slate-800
  active:bg-slate-700
  transition-colors
"
          >
            {mood}
          </button>
        ))}
      </div>
    </div>
  );
}
export default MoodSelector;
