import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { BsClockHistory, BsStar } from "react-icons/bs";

import SerieCardPlay from "../components/SerieCardPlay";

import "../style/Movie.css";
const imagesURL = import.meta.env.VITE_IMG;
const moviesURLS = import.meta.env.VITE_API_SS;
const apiKey = import.meta.env.VITE_API_KEY;

const Serie = () => {
  const { id } = useParams();
  const [tv, setSerie] = useState(null);

  useEffect(() => {
    const serieUrl = `${moviesURLS}/tv/${id}?${apiKey}`;
    getTV(serieUrl);
  }, []);

  const getTV = async (url) => {
    const res = await fetch(url);
    const data = await res.json();
    setSerie(data);
  };

  const formatCurrency = (number) => {
    return number.substr(0, 4);
  };

  return (
    <div className="movie-page">
      <div className="movie-page-info">
        {tv && (
          <>
            <div className="movie-info">
              <div className="movie-info-card">
                <img src={imagesURL + tv.poster_path} alt={tv.title} />
              </div>
              <div className="descriptions">
                <div className="info">
                  <p className="tagline">Assistir {tv.title} online</p>
                </div>
                <div className="descriptions-title">
                  <p className="tagline">{tv.title}</p>
                </div>
                <div className="descriptions-info">
                  <div className="info">
                    <p>{formatCurrency(tv.first_air_date)}</p>
                  </div>
                  <div className="info">
                    <p>
                      <BsClockHistory />
                      {tv.episode_run_time} minutos
                    </p>
                  </div>
                  <div className="info">
                    <p>
                      <BsStar />
                      {tv.vote_average}
                    </p>
                  </div>
                </div>
                <div className="info description">
                  <p>{tv.overview}</p>
                </div>
              </div>
            </div>
            <div className="backdrop">
              <div className="ff"></div>
              <div
                className="f"
                style={{
                  backgroundImage: `url("https://image.tmdb.org/t/p/w1280/${tv.backdrop_path}")`,
                }}
              ></div>
            </div>

            <div className="movie-play-fundo">
              <div className="movie-play">
                <SerieCardPlay tv={tv} showLink={false} />
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Serie;
