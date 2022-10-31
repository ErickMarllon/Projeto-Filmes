import React from "react";
import { useState } from "react";
import { BsFillCaretDownFill } from "react-icons/bs";

import {
  GenresContainer,
  GenresContent,
  GenresMenu,
} from "../style/MenuGenreStyle";

const Arraygenres = [
  {
    id: 10759,
    name: "Action & Adventure",
  },
  {
    id: 16,
    name: "Animation",
  },
  {
    id: 35,
    name: "Comedy",
  },
  {
    id: 80,
    name: "Crime",
  },
  {
    id: 99,
    name: "Documentary",
  },
  {
    id: 18,
    name: "Drama",
  },
  {
    id: 10751,
    name: "Family",
  },
  {
    id: 10762,
    name: "Kids",
  },
  {
    id: 9648,
    name: "Mystery",
  },
  {
    id: 10763,
    name: "News",
  },
  {
    id: 10764,
    name: "Reality",
  },
  {
    id: 10765,
    name: "Sci-Fi & Fantasy",
  },
  {
    id: 10766,
    name: "Soap",
  },
  {
    id: 10767,
    name: "Talk",
  },
  {
    id: 10768,
    name: "War & Politics",
  },
  {
    id: 37,
    name: "Western",
  }
];

const SerieGenres = ({
  genresOffset,
  setgenresOffSet,
  setOffset,
}) => {
  function GenresChange(genres) {
    setgenresOffSet(genres);
    setOffset(1);
  }

  const [active, setMode] = useState(false);
  function ToggleMode() {
    setMode(!active);
  }

  return (
    <GenresContainer>
      <GenresContent onClick={ToggleMode}>
        <h1>Gêneros</h1> <BsFillCaretDownFill />
      </GenresContent>
      <GenresMenu active={active} onClick={ToggleMode}>
        <ul active={active}>
          {Arraygenres.map((Arraygenres, key) => (
            <li key={key}>
              <button
                onClick={() => GenresChange((genresOffset = Arraygenres.id))}
              >
                {Arraygenres.name}
              </button>
            </li>
          ))}
        </ul>
      </GenresMenu>
    </GenresContainer>
  );
};
export default SerieGenres;
