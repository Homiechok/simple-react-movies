import "../css/MovieCard.css"

export default function MovieCard({ movie }) {
  function handleClick() {
    alert("Like");
  }

  return (
    <div className="movie-card">
      <div className="movie-poster">
        <img src={movie.id} alt={movie.title} />
        <div className="movie-overlay">
          <button className="favorite-btn" onClick={handleClick}>
            ♥
          </button>
        </div>
      </div>
      <div className="movie-info">
        <h3>{movie.title}</h3>
        <p>{movie.release_date}</p>
      </div>
    </div>
  );
}
