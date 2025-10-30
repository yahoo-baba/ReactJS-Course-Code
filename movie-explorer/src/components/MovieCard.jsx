import { Link } from "react-router-dom"

function MovieCard({ movie }) {
  return (
    <div className="movie-card">
        <img alt={movie.Title} src={movie.Poster} />
        <h3>{movie.Title}</h3>
        <p>{movie.Year}</p>
        <Link to={`/movie/${movie.imdbID}`}>Details</Link>
    </div>
  )
}

export default MovieCard