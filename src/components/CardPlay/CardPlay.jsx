const moviePlay = import.meta.env.VITE_API_MOVIE;
const seriePlay = import.meta.env.VITE_API_SERIE;

import { MoviePlay, Play, PlayContainer } from './CardPlay.Style';
const CardPlay = ({ keyId, type }) => {
  const keytype = type === 'Movie' ? moviePlay : seriePlay;

  return (
    <PlayContainer>
      <MoviePlay>
        <Play>
          <iframe
            src={keytype + keyId}
            web-share='true'
            picture-in-picture='true'
            clipboard-write='true'
            encrypted-media='true'
            allowfullscreen='true'
          />
        </Play>
      </MoviePlay>
    </PlayContainer>
  );
};

export default CardPlay;
