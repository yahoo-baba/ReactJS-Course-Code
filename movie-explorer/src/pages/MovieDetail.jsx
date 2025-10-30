import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'

function MovieDetail() {
    const { id } = useParams()
    const [movie, SetMovie] = useState(null)

    useEffect(() => {
        async function getMovie() {
          const res = await fetch(`http://www.omdbapi.com/?apikey=9236f6af&i=${id}`)
          const data = await res.json();  
          SetMovie(data)
          console.log(data)
        }
        getMovie();
    }, [id])

    if(!movie) return <p>Loading...</p>

  return (
    <div className="movie-detail">
		<h2>{movie.Title}</h2>
		<img alt={movie.Title} src={movie.Poster} />
		<p><strong>Genre:</strong> {movie.Genre}</p>
		<p><strong>Released:</strong> {movie.Released}</p>
		<p><strong>Plot:</strong> {movie.Plot}</p>
	</div>
  )
}

export default MovieDetail