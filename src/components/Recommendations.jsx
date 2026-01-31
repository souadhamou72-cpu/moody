function Recommendations({ mood, resultsRef }) {
  return (
    <div className="recommendations" ref={resultsRef}>
      <h2>Recommendations for {mood} mood</h2>
    </div>
  );
}

export default Recommendations;
