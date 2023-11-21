import { FaStar } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { CardDescription, CardStyle } from './CardStyle.jsx';

const imagesURL = import.meta.env.VITE_IMG;

const Card = ({ type, keyId, Title, image }) => {
  if (image !== null) {
    return (
      <CardStyle>
        <Link to={`/${type}/${keyId}`}>
          <img src={imagesURL + image} alt={Title} />
        </Link>

        <CardDescription>
          <h2>{Title}</h2>
          <p>
            <FaStar /> {keyId.vote_average}
          </p>
        </CardDescription>
      </CardStyle>
    );
  }
};

export default Card;
