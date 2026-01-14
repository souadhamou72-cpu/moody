function QuoteList({ quotes }) {
  return (
    <div>
      <h3>Quotes</h3>
      <ul>
        {quotes?.map((quote, index) => (
          <li key={index}>{quote.text}</li>
        ))}
      </ul>
    </div>
  );
}

export default QuoteList;
