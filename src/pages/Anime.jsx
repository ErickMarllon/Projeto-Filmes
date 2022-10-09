import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  BsGraphUp,
  BsWallet2,
  BsHourglassSplit,
  BsFillFileEarmarkTextFill,
} from "react-icons/bs";

import MovieCard from "../components/MovieCard";
import MovieCardPlay from "../components/MovieCardPlay";

import "../style/Movie.css";

const api = import.meta.env.VITE_API;
const apiKey = import.meta.env.VITE_API_KEY;
const Movie = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    const movieUrl = `${api}/discover/movie?${apiKey}&page=${page}`;
    getMovie(movieUrl);
  }, []);
  
  const getMovie = async (url) => {
    const res = await fetch(url);
    const data = await res.json();
    setMovie(data);
  };

  const formatCurrency = (number) => {
    return number.toLocaleString("en-US", {
      style: "currency",
      currency: "USD",
    });
  };

  return (
    <div className="movie-page">
      <div className="movie-page-info">
        {movie && (
          <>
            <div className="movie-info">
              <MovieCard movie={movie} showLink={true} />
              <div className="descriptions">
                <p className="tagline">{movie.tagline}</p>
                <div className="info"></div>

                <h3>
                  <BsWallet2 /> Orçamento:
                </h3>
                <p>{formatCurrency(movie.budget)}</p>
              </div>
              <div className="info">
                <h3>
                  <BsGraphUp /> Receita:
                </h3>
                <p>{movie.backdrop_path}</p>
              </div>
              <div className="info">
                <h3>
                  <BsHourglassSplit /> Duração:
                </h3>
                <p>{movie.runtime} minutos</p>
              </div>
              <div className="info description">
                <h3>
                  <BsFillFileEarmarkTextFill /> Descrição:
                </h3>
                <p>{movie.overview}</p>
              </div>
            </div>
            <div className="backdrop"></div>
            <div
              className="f"
              style={{
                backgroundImage: `url("https://image.tmdb.org/t/p/w500/${movie.backdrop_path}")`,
              }}
            ></div>

            <div className="movie-play-fundo">
              <div className="movie-play">
                <MovieCardPlay movie={movie} showLink={false} />
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Movie;
