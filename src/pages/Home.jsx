import MovieCard from "../components/MovieCard.jsx";
import { useState } from "react";
import "../css/Home.css"

export default function Home() {
  const [searchQuery, setSearchQuery] = useState("");

  const movies = [
    { id: 1, title: "The Movie 1", release_date: 2020 },
    { id: 2, title: "The Movie 2", release_date: 2022 },
    { id: 3, title: "The Movie 3", release_date: 2024 },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(searchQuery);
    setSearchQuery("");
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

      <div className="movies-grid">
        {movies.map((movie) => (
          <MovieCard movie={movie} key={movie.id} />
        ))}
      </div>
    </div>
  );
}
