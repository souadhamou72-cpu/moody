import { useEffect, useState } from 'react';
import MovieCard from "./MovieCard.jsx";

const moodToGenre = {
  happy: 35,
  sad: 18,
  relaxed: 10749,
  angry: 28,
};

function MoviesRecommendations({ mood }) {
  const [allMovies, setAllMovies] = useState([]);
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    async function fetchMovies() {
      setLoading(true);
      setError(null);

      try {
        const genreId = moodToGenre[mood];
        const apiKey = import.meta.env.VITE_TMDB_API_KEY;

        if (!genreId) {
          throw new Error("Unknown mood.");
        }

        if (!apiKey) {
          throw new Error("Missing TMDB API key.");
        }

        const response = await fetch(
          `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&with_genres=${genreId}`
        );

        if (!response.ok) {
          throw new Error(`TMDB request failed with ${response.status}.`);
        }

        const data = await response.json();

        if (!data || !Array.isArray(data.results)) {
          throw new Error("Invalid TMDB response.");
        }

        setAllMovies(data.results);
        setMovies(data.results.slice(0, 6));
      } catch (err) {
        setError('Could not load movies 😕');
      } finally {
        setLoading(false);
      }
    }

    fetchMovies();
  }, [mood]);

  function shuffleMovies() {
    if (allMovies.length === 0) return;

    const shuffled = [...allMovies].sort(() => 0.5 - Math.random());
    setMovies(shuffled.slice(0, 6));
  }

  if (loading) return <p>Loading movies...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="w-full">
      <h2 className="text-lg sm:text-xl font-semibold">Movies for your mood 🎬</h2>

      <button
        onClick={shuffleMovies}
        className="mt-3 inline-flex items-center justify-center rounded-lg bg-white/10 px-4 py-2 text-sm sm:text-base font-medium hover:bg-white/20"
      >
        Show more movies 🎲
      </button>

      <div className="mt-5 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 justify-items-center">
        {movies.map((movie) => (
          <MovieCard
            key={movie.id}
            title={movie.title}
            img={
              movie.poster_path
                ? `https://image.tmdb.org/t/p/w200${movie.poster_path}`
                : null
            }
          />
        ))}
      </div>
    </div>
  );
}

export default MoviesRecommendations;
