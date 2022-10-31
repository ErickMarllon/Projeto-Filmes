import { useEffect, useState, useRef } from "react";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import MovieCard from "../components/MovieCard";
import SerieCard from "../components/SerieCard";

import {
  Title,
  ContainerNoWrap,
  ContainNoWrap,
  ButtonLeft,
  ButtonRight,
} from "../style/FilmesStyle.jsx";
const moviesURL = import.meta.env.VITE_API;
const apiKey = import.meta.env.VITE_API_KEY;
const moviesURL_S = import.meta.env.VITE_API_SS;

const Home = () => {
  const [topMovies, setTopMovies] = useState([]);
  const [topMoviess, setTopMoviess] = useState([]);
  const carousel = useRef("");
  const carouselS = useRef("");
  useEffect(() => {
    const topRatedUrls = `${moviesURL}/discover/movie?${apiKey}`;
    getTopRatedMovies(topRatedUrls);

    
  }, []);

  const getTopRatedMovies = async (url) => {
    const results = await fetch(url);
    const data = await results.json();
    setTopMovies(data.results);
  };

  useEffect(() => {
    const topRatedUrls = `${moviesURL_S}/discover/tv?${apiKey}`;
    getTopRatedMoviess(topRatedUrls);
  }, []);

  const getTopRatedMoviess = async (url) => {
    const results = await fetch(url);
    const data = await results.json();
    setTopMoviess(data.results);
  };

  const handleLeftClick = (e) => {
    e.preventDefault();
    carousel.current.scrollLeft -= carousel.current.offsetWidth / 2;
  };

  const handleRightClick = (e) => {
    e.preventDefault();
    carousel.current.scrollLeft += carousel.current.offsetWidth * 2;
  };
  const handleLeftClickS = (e) => {
    e.preventDefault();
    carouselS.current.scrollLeft -= carouselS.current.offsetWidth / 2;
  };

  const handleRightClickS = (e) => {
    e.preventDefault();
    carouselS.current.scrollLeft += carouselS.current.offsetWidth * 2;
  };

  return (
    <div className="filmes">
      <Title>Filmes</Title>
      <ContainerNoWrap>
        <ContainNoWrap ref={carousel}>
          {topMovies.length > 0 &&
            topMovies.map((movie) => (
              <MovieCard key={movie.id} movie={movie} />
            ))}
          <ButtonLeft
            className="button-left"
            onClick={handleLeftClick}
            alt="Scroll Left"
          >
            <BsChevronLeft />
          </ButtonLeft>
          <ButtonRight onClick={handleRightClick} alt="Scroll Right">
            <BsChevronRight />
          </ButtonRight>
        </ContainNoWrap>
      </ContainerNoWrap>

      <Title>Séries</Title>
      <ContainerNoWrap>
        <ContainNoWrap ref={carouselS}>
          {topMoviess.length > 0 &&
            topMoviess.map((tv) => <SerieCard key={tv.id} tv={tv} />)}
          <ButtonLeft
            className="button-left"
            onClick={handleLeftClickS}
            alt="Scroll Left"
          >
            <BsChevronLeft />
          </ButtonLeft>
          <ButtonRight onClick={handleRightClickS} alt="Scroll Right">
            <BsChevronRight />
          </ButtonRight>
        </ContainNoWrap>
      </ContainerNoWrap>
    </div>
  );
};

export default Home;
