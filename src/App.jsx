import { useState } from "react";
import MoodSelector from "./components/MoodSelector";
import Recommendations from "./components/Recommendations";
import MusicRecommendations from "./components/MusicRecommendations";
import MoviesRecommendations from "./components/MoviesRecommendations";


function App() {
  const [selectedMood, setSelectedMood] = useState(null);
  

  return (
    <div className="app">
       <div className="top-section">
      <h1>MoodSpace</h1>

      <MoodSelector setSelectedMood={setSelectedMood} />
      </div>

      {selectedMood && (
        <>
          <Recommendations mood={selectedMood} />
          <MusicRecommendations mood={selectedMood} />
          <MoviesRecommendations mood={selectedMood} />
        </>
      )}
    </div>
  );
}


export default App;
