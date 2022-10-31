import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { BsClockHistory, BsStar } from "react-icons/bs";
import React, { Component } from "react";
import MovieCardPlay from "../components/MovieCardPlay";
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
    const results = await fetch(url);
    const data = await results.json();
    setMovie(data);
  };

  const formatYear = (number) => {
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
        {movie && (
          <>
            <MovieDescriptionStyled>
              <CardStyled>
                <img src={imagesURL + movie.poster_path} alt={movie.title} />
              </CardStyled>
              <CardContainerStyled>
                <TitleStyled>{movie.title}</TitleStyled>
                <AssetsStyled>
                  <p>{formatYear(movie.release_date)}</p>
                  <p>
                    <BsClockHistory />
                    {converter(movie.runtime)}
                  </p>
                  <p>
                    <BsStar />
                    {movie.vote_average.toFixed(1)}
                  </p>
                </AssetsStyled>
                <p>{movie.overview}</p>
              </CardContainerStyled>
            </MovieDescriptionStyled>

            <BackdropContainerStyled>
              <BackdropFilterStyled />

              <BackdropStyled
                style={{
                  backgroundImage: `url("https://image.tmdb.org/t/p/w1280/${movie.backdrop_path}")`,
                }}
              ></BackdropStyled>
            </BackdropContainerStyled>

            <PlayContainer>
              <MoviePlay>
                <MovieCardPlay movie={movie} />
              </MoviePlay>
            </PlayContainer>
          </>
        )}
      </MovieContainerStyled>
    </MoviePageStyled>
  );
};

export default Movie;
