export const MoviesShow = ({ movies }) => {
  return (
    <ul className='movies'>
      {
         movies.map(movie => (
           <li className='movie' key={movie.id}>
             <h3>{movie.title}</h3>
             <p>
               {movie.year}
             </p>
             <img src={movie.poster} alt={movie.Title} />
           </li>
         ))
     }
    </ul>
  )
}

export const NoMovies = () => {
  return (
    <p>No se encontraron resultados</p>
  )
}

export const Movies = ({ movies }) => {
  const hasMovies = movies?.length > 0

  return (
    hasMovies
      ? <MoviesShow movies={movies} />
      : <NoMovies />
  )
}
