const moviePlay = import.meta.env.VITE_API_MOVIE;

const MovieCardPlay = ({ movie }) => {
  return (
    <div className="movie-Play">
      <iframe src={moviePlay + movie.imdb_id} />
    </div>
  );
};

export default MovieCardPlay;
