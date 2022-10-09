import { Link } from "react-router-dom";

import { FaStar } from "react-icons/fa";

const imagesURL = import.meta.env.VITE_IMG;

const SerieCard = ({ tv, showLink = true }) => {
  if (tv.poster_path && tv.backdrop_path !== null) {
    return (
      <div className="movie-card ">
        {showLink && (
          <Link to={`/Serie/${tv.id}`}>
            <div className="im">
              <img src={imagesURL + tv.poster_path} alt={tv.name} />
            </div>
          </Link>
        )}

        <div className="movie-card-Description">
          <h2>{tv.name}</h2>
          <p>
            <FaStar /> {tv.vote_average}
          </p>
        </div>
      </div>
    );
  }
};

export default SerieCard;
