import React, { useState } from 'react';
import { BsFillCaretDownFill } from 'react-icons/bs';

import { Filmesgenres } from '../Constants/FilmesGenres';
import { Seriegenres } from '../Constants/SeriesGenres';
import { GenresContainer, GenresContent, GenresMenu } from './MenuGenreStyle';

const Genres = ({ genresOffset, setgenresOffSet, setOffset, type }) => {
  const [active, setMode] = useState(false);
  const [genre, setGenres] = useState('');
  const ToggleMode = () => {
    setMode(!active);
  };
  const typesGenres = type === 'movie' ? Filmesgenres : Seriegenres;
  function GenresChange(key) {
    if ((genresOffset = key.id)) {
      setgenresOffSet(key.id);
      setOffset(1);
      setGenres(key.name);
    }
  }
  return (
    <GenresContainer>
      <GenresContent onClick={ToggleMode}>
        <h1>{genre ? genre : 'Genêro'}</h1> <BsFillCaretDownFill />
      </GenresContent>
      <GenresMenu active={active} onClick={ToggleMode}>
        <ul active={active}>
          {typesGenres.map((Arraygenres) => (
            <li key={Arraygenres.id}>
              <button onClick={() => GenresChange(Arraygenres)}>
                {Arraygenres.name}
              </button>
            </li>
          ))}
        </ul>
      </GenresMenu>
    </GenresContainer>
  );
};
export default Genres;
