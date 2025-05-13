import MovieCard from "../components/MovieCard.jsx";
import { useEffect, useState } from "react";
import "../css/Home.css";
import {getPopularMovies, searchMovies} from "../services/api.js";

export default function Home() {
  const [searchQuery, setSearchQuery] = useState("");
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadPopularMovies = async () => {
      try {
        const popularMovies = await getPopularMovies();
        setMovies(popularMovies);
      } catch (err) {
        console.log(err);
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    loadPopularMovies();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const searchResults = await searchMovies(searchQuery);

    if (!searchQuery.trim()) return;
    if (loading) return;

    try {
      setMovies(searchResults);
      setError(null);
    } catch (err) {
      console.log(err);
      setError("Error to search movies");

    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="home">
      <form className="search-form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Search..."
          className="search-input"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button type="submit" className="search-button">
          Search
        </button>
      </form>

      {error && <div className="error">{error}</div>}

      {loading ? (
        <div className="loading">Loading...</div>
      ) : (movies.length !== 0 ? (
        <div className="movies-grid">
          {movies.map((movie) => (
            <MovieCard movie={movie} key={movie.id} />
          ))}
        </div>
      ) : (
        <div className="favorites-empty">
          <h2>Nothing was found for viewing</h2>
          <p>Try to type something else!</p>
        </div>
      ))}
    </div>
  );
}
