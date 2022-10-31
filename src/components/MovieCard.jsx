import { Link } from "react-router-dom";
import { CardStyle, CardDescription } from "../style/CardStyle.jsx";
import { FaStar } from "react-icons/fa";

const imagesURL = import.meta.env.VITE_IMG;

const MovieCard = ({ movie, showLink = true }) => {
  if (movie.poster_path && movie.backdrop_path !== null) {
    return (
      <CardStyle>
        {showLink && (
          <Link to={`/movie/${movie.id}`}>
            <img src={imagesURL + movie.poster_path} alt={movie.title} />
          </Link>
        )}

        <CardDescription>
          <h2>{movie.title}</h2>
          <p>
            <FaStar /> {movie.vote_average}
          </p>
        </CardDescription>
      </CardStyle>
    );
  }
};

export default MovieCard;
