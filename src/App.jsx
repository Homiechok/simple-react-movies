import "./App.css";
import MovieCard from "./components/MovieCard.jsx";

export default function App() {
  return (
    <>
      <MovieCard movie={{ title: "John Wick", release_date: "2024" }} />
      <MovieCard movie={{ title: "John Wick2", release_date: "2025" }} />
    </>
  );
}
