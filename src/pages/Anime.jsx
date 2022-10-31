import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { BsClockHistory, BsStar } from "react-icons/bs";

import SerieCardPlay from "../components/SerieCardPlay";
import {
  MoviePageStyled,
  MovieDescriptionStyled,
  MovieContainerStyled,
  CardStyled,
  CardContainerStyled,
  TitleStyled,
  AssetsStyled,
  BackdropContainerStyled,
  BackdropFilterStyled,
  BackdropStyled,
  PlayContainer,
  MoviePlay,
} from "../style/MovieCardStyle";

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
    const results = await fetch(url);
    const data = await results.json();
    setSerie(data);
  };

  const formatCurrency = (number) => {
    return number.substr(0, 4);
  };

  const converter = (minutos) => {
    const horas = Math.floor(minutos / 60);
    const min = minutos % 60;
    const textoHoras = `${horas}`.slice(-2);
    const textoMinutos = `00${min}`.slice(-2);

    return `${textoHoras}h ${textoMinutos}m`;
  };

  return (
    <MoviePageStyled>
      <MovieContainerStyled>
        {tv && (
          <>
            <MovieDescriptionStyled>
              <CardStyled>
                <img src={imagesURL + tv.poster_path} alt={tv.title} />
              </CardStyled>
              <CardContainerStyled>
                <TitleStyled>{tv.title}</TitleStyled>
                <AssetsStyled>
                  <p>{formatCurrency(tv.first_air_date)}</p>
                  <p>
                    <BsClockHistory />
                    {converter(tv.episode_run_time)}
                  </p>
                  <p>
                    <BsStar />
                    {tv.vote_average.toFixed(1)}
                  </p>
                </AssetsStyled>
                <p>{tv.overview}</p>
              </CardContainerStyled>
            </MovieDescriptionStyled>

            <BackdropContainerStyled>
              <BackdropFilterStyled />

              <BackdropStyled
                style={{
                  backgroundImage: `url("https://image.tmdb.org/t/p/w1280/${tv.backdrop_path}")`,
                }}
              ></BackdropStyled>
            </BackdropContainerStyled>

            <PlayContainer>
              <MoviePlay>
                <SerieCardPlay tv={tv} showLink={false} />
              </MoviePlay>
            </PlayContainer>
          </>
        )}
      </MovieContainerStyled>
    </MoviePageStyled>
  );
};

export default Serie;
