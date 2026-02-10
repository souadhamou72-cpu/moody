function MoodSelector({ setSelectedMood }) {
  const moods = ['happy', 'sad', 'relaxed', 'angry'];

  return (
    <div>
      <h2 className="mt-4 text-base sm:text-lg">Select your mood:</h2>

      <div className="mt-4 flex flex-wrap justify-center gap-3 sm:gap-4">
        {moods.map((mood) => (
          <button
            key={mood}
            onClick={() => {
              setSelectedMood(mood);
            }}
            className="
  inline-flex items-center justify-center
  rounded-lg px-4 py-2 text-sm sm:px-5 sm:py-2.5 sm:text-base
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
