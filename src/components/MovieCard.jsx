import { Link } from "react-router-dom";

import { FaStar } from "react-icons/fa";

const imagesURL = import.meta.env.VITE_IMG;

const MovieCard = ({ movie, showLink = true }) => {
  if (movie.poster_path && movie.backdrop_path !== null) {
    return (
      <div className="movie-card">
        {showLink && (
          <Link to={`/movie/${movie.id}`}>
            <img src={imagesURL + movie.poster_path} alt={movie.title} />
          </Link>
        )}

        <div className="movie-card-Description">
          <h2>{movie.title}</h2>
          <p>
            <FaStar /> {movie.vote_average}
          </p>
        </div>
      </div>
    );
  }
};

export default MovieCard;
