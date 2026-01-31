import { useState, useEffect, useRef } from "react";
import MoodSelector from "./components/MoodSelector";
import Recommendations from "./components/Recommendations";

import MusicRecommendations from "./components/MusicRecommendations";
import QuoteList from "./components/QuoteList";
import MoviesRecommendations from "./components/MoviesRecommendations";



function App() {
  
 const [selectedMood, setSelectedMood] = useState(null);
 const resultsRef = useRef(null);

 useEffect(() => {
  if (selectedMood && resultsRef.current) {
    resultsRef.current.scrollIntoView({ behavior: "smooth" });
  }
}, [selectedMood]);


  

  return (
    <div className="app">
       <div className="top-section">
      <h1>MoodSpace</h1>

      <MoodSelector
  setSelectedMood={(mood) => {
    setSelectedMood(mood);
    setTimeout(() => {
      window.scrollTo({
        top: window.innerHeight,
        behavior: "smooth",
      });
    }, 100);
  }}
/>

      </div>

      {selectedMood && (
  <div className="content-section">
    <Recommendations mood={selectedMood} resultsRef={resultsRef} />
    <MusicRecommendations mood={selectedMood} />
    <QuoteList mood={selectedMood} />
    <MoviesRecommendations mood={selectedMood} />
  </div>
)}

    </div>
  );
  
}


export default App;
