import { Link } from "react-router-dom";
import {CardStyle, CardDescription} from "../style/CardStyle.jsx";
import { FaStar } from "react-icons/fa";

const imagesURL = import.meta.env.VITE_IMG;

const SerieCard = ({ tv, showLink = true }) => {
  if (tv.poster_path && tv.backdrop_path !== null) {
    return (
         <CardStyle>
        {showLink && (
          <Link to={`/Serie/${tv.id}`}>
              <img src={imagesURL + tv.poster_path} alt={tv.name} />
          </Link>
        )}
           <CardDescription>
          <h2>{tv.name}</h2>
          <p>
            <FaStar /> {tv.vote_average}
          </p>
           </CardDescription>
     </CardStyle>
    );
  }
};

export default SerieCard;
