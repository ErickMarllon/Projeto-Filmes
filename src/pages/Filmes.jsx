import { useEffect, useState, useRef } from "react";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import MovieCard from "../components/MovieCard";
import Pagination from "../components/Pagination";
import MoviesGenres from "../components/MoviesGenres";

import "../style/filmes.css";
import "../style/pagination.css";
import "../style/submenu.css";

const api = import.meta.env.VITE_API;
const apiKey = import.meta.env.VITE_API_KEY;

const Filmes = () => {
  const [topMoviess, setTopMoviess] = useState([]);
  const [topMovies, setTopMovies] = useState([]);
  const [topMovies2, setTopMovies2] = useState([]);
  const [page, setPage] = useState(1);
  const [genres, setGenres] = useState();
  const [totalPage, setTotalPage] = useState();
  const carousel = useRef("");

  useEffect(() => {
    setTimeout(() => {
      const topRatedUrls = `${api}/discover/movie?${apiKey}&page=1&primary_release_year=2022`;
      getTopRatedMoviess(topRatedUrls);
    }, 500);
  }, []);

  const getTopRatedMoviess = async (url) => {
    const res = await fetch(url);
    const data = await res.json();
    setTopMoviess(data.results);
  };

  useEffect(() => {
    setTimeout(() => {
      const topRatedUrl = `${api}/discover/movie?${apiKey}&sort_by=popularity.desc&include_adult=false&include_video=false&page=${page}&primary_release_year=2022&with_genres=${genres}`;
      getTopRatedMovies(topRatedUrl);
    }, 500);
  }, [page, genres]);

  const getTopRatedMovies = async (url) => {
    const results = await fetch(url);
    const data = await results.json();
    setTopMovies(data.results);
    setTotalPage(data.total_pages);
  };

  useEffect(() => {
    setTimeout(() => {
      const topRatedUrl2 = `${api}/discover/movie?${apiKey}&sort_by=popularity.desc&include_adult=false&include_video=false&page=${
        page + 1
      }&year=2022&with_genres=${genres}`;
      getTopRatedMovies2(topRatedUrl2);
    }, 500);
  }, [page, genres]);

  const getTopRatedMovies2 = async (url) => {
    const results = await fetch(url);
    const data = await results.json();
    setTopMovies2(data.results);
  };

  const handleLeftClick = (e) => {
    e.preventDefault();
    carousel.current.scrollLeft -= carousel.current.offsetWidth / 2;
  };

  const handleRightClick = (e) => {
    e.preventDefault();
    carousel.current.scrollLeft += carousel.current.offsetWidth / 2;
  };
  

  return (
    <div className="filmes">
      <div className="filmes-melhor-avaliacao">
        <h2 className="filmes-title">Lançamentos</h2>
        <div className="filmes-container">
          <div className="carousel" ref={carousel}>
            {topMoviess.length > 0 &&
              topMoviess.map((movie) => (
                <MovieCard key={movie.id} movie={movie} />
              ))}
          </div>
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
      <div className="sub-navigation">
      <MoviesGenres genresOffset={genres} setgenresOffSet={setGenres} setOffset={setPage} />
      </div>
      <div className="container-wrap">
        {/* <h2 className="title">Lançamentos</h2> */}
        <div className="filmes-container-wrap">
          {topMovies.length > 0 &&
            topMovies.map((movie) => (
              <MovieCard key={movie.id} movie={movie} />
            ))}

          {topMovies2.length > 0 &&
            topMovies2.map((movie) => (
              <MovieCard key={movie.id} movie={movie} />
            ))}
        </div>
      </div>
      <div className="pagination">
        <Pagination total={totalPage} offset={page} setOffset={setPage} />
      </div>
    </div>
  );
};

export default Filmes;
