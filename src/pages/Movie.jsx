import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { BsClockHistory, BsStar } from "react-icons/bs";

import MovieCardPlay from "../components/MovieCardPlay";

import "../style/Movie.css";
const imagesURL = import.meta.env.VITE_IMG;
const moviesURL = import.meta.env.VITE_API_SS;
const apiKey = import.meta.env.VITE_API_KEY;

const Movie = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    const movieUrl = `${moviesURL}/movie/${id}?${apiKey}&language=pt-BR&append_to_response=images`;
    getMovie(movieUrl);
  }, []);

  const getMovie = async (url) => {
    const res = await fetch(url);
    const data = await res.json();
    setMovie(data);
  };

  const formatCurrency = (number) => {
    return number.substr(0, 4);
  };


  return (
    <div className="movie-page">
      <div className="movie-page-info">
        {movie && (
          <>
            <div className="movie-info">
              <div className="movie-info-card">
                <img src={imagesURL + movie.poster_path} alt={movie.title} />
              </div>
              <div className="descriptions">
                <div className="info">
                  <p className="tagline">Assistir {movie.title} online</p>
                </div>
                <div className="descriptions-title">
                  <p className="tagline">{movie.title}</p>
                </div>
                <div className="descriptions-info">
                  <div className="info">
                    <p>{formatCurrency(movie.release_date)}</p>
                  </div>
                  <div className="info">
                    <p>
                      <BsClockHistory />
                      {movie.runtime} minutos
                    </p>
                  </div>
                  <div className="info">
                    <p>
                      <BsStar />
                      {movie.vote_average}
                    </p>
                  </div>
                </div>
                <div className="info description">
                  <p>{movie.overview}</p>
                </div>
              </div>
            </div>
            <div className="backdrop">
              <div className="ff"></div>
              <div
                className="f"
                style={{
                  backgroundImage: `url("https://image.tmdb.org/t/p/w1280/${movie.backdrop_path}")`,
                }}
              ></div>
            </div>
            <div className="movie-play-fundo">
              <div className="movie-play">
                <MovieCardPlay movie={movie} />
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Movie;
