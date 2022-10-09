import { useEffect, useState, useRef } from "react";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import MovieCard from "../components/MovieCard";
import SerieCard from "../components/SerieCard";

import "../style/filmes.css";

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
    const res = await fetch(url);
    const data = await res.json();
    setTopMovies(data.results);
  };

  useEffect(() => {
    const topRatedUrls = `${moviesURL_S}/discover/tv?${apiKey}`;
    getTopRatedMoviess(topRatedUrls);
  }, []);
  const getTopRatedMoviess = async (url) => {
    const res = await fetch(url);
    const data = await res.json();
    setTopMoviess(data.results);
  };
  const handleLeftClick = (e) => {
    e.preventDefault();
    carousel.current.scrollLeft -= carousel.current.offsetWidth / 2;
  };

  const handleRightClick = (e) => {
    e.preventDefault();
    carousel.current.scrollLeft += carousel.current.offsetWidth / 2;
  };
  const handleLeftClickS = (e) => {
    e.preventDefault();
    carouselS.current.scrollLeft -= carouselS.current.offsetWidth / 2;
  };

  const handleRightClickS = (e) => {
    e.preventDefault();
    carouselS.current.scrollLeft += carouselS.current.offsetWidth / 2;
  };

  return (
    <div className="filmes">
      <div className="home-melhor-avaliacao">
        <h2 className="filmes-title">Filmes</h2>
        <div className="filmes-container">
          <div className="carousel" ref={carousel}>
            {topMovies.length > 0 &&
              topMovies.map((movie) => (
                <MovieCard key={movie.id} movie={movie} />
              ))}
            <div className="buttons">
              <button
                className="button-left"
                onClick={handleLeftClick}
                alt="Scroll Left"
              >
                <BsChevronLeft />
              </button>

              <button
                className="button-right"
                onClick={handleRightClick}
                alt="Scroll Right"
              >
                <BsChevronRight />
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="filmes">
        <h2 className="filmes-title">Séries</h2>
        <div className="filmes-container">
          <div className="carousel" ref={carouselS}>
            {topMoviess.length > 0 &&
              topMoviess.map((tv) => <SerieCard key={tv.id} tv={tv} />
              )}
            <div className="buttons">
              <button
                className="button-left"
                onClick={handleLeftClickS}
                alt="Scroll Left"
              >
                <BsChevronLeft />
              </button>

              <button
                className="button-right"
                onClick={handleRightClickS}
                alt="Scroll Right"
              >
                <BsChevronRight />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
