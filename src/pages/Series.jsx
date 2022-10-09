import { useEffect, useState, useRef } from "react";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";

import SerieCard from "../components/SerieCard";
import Pagination from "../components/Pagination";
import SerieGenres from "../components/SerieGenres";
import "../style/filmes.css";
import "../style/pagination.css";


const api = import.meta.env.VITE_API;
const apiKey = import.meta.env.VITE_API_KEY;

const Series = () => {
  const [topMovies, setTopMovies] = useState([]);
  const [topMoviess, setTopMoviess] = useState([]);
  const [topMovies2, setTopMovies2] = useState([]);
  const [page, setPage] = useState(1);
  const [genres, setGenres] = useState();
  const [totalPage, setTotalPage] = useState();
  const carousel = useRef("");
  useEffect(() => {
    setTimeout(() => {
      const topRatedUrls = `${api}/discover/tv?${apiKey}&page=1`;
      getTopRatedMoviess(topRatedUrls);
    }, 1000);
  }, []);

  const getTopRatedMoviess = async (url) => {
    const res = await fetch(url);
    const data = await res.json();
    setTopMoviess(data.results);
  };

  useEffect(() => {
    setTimeout(() => {
      const topRatedUrl = `${api}/discover/tv?${apiKey}&sort_by=popularity.desc&air_date.gte=2022&page=${page}&timezone=America%2FNew_York&with_genres=${genres}&include_null_first_air_dates=false`;
      getTopRatedMovies(topRatedUrl);
    }, 1000);
  }, [page, genres]);

  const getTopRatedMovies = async (url) => {
    const results = await fetch(url);
    const data = await results.json();
    setTopMovies(data.results);
    setTotalPage(data.total_pages);
  };

  useEffect(() => {
    setTimeout(() => {
      const topRatedUrl2 = `${api}/discover/tv?${apiKey}&sort_by=popularity.desc&air_date.gte=2022&page=${page+1}&timezone=America%2FNew_York&with_genres=${genres}&include_null_first_air_dates=false`;
      getTopRatedMovies2(topRatedUrl2);
    }, 1000);
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
              topMoviess.map((tv) => <SerieCard key={tv.id} tv={tv} />)}
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
      <div>
              <div className="sub-menu">
        <SerieGenres genresOffset={genres} setgenresOffSet={setGenres} setOffset={setPage} />
      </div>
      </div>

      <div className="container-wrap">
        {/* <h2 className="title">Lançamentos</h2> */}
        <div className="filmes-container-wrap">
          {topMovies.length > 0 &&
            topMovies.map((tv) => <SerieCard key={tv.id} tv={tv} />)}
          {topMovies2.length > 0 &&
            topMovies2.map((tv) => <SerieCard key={tv.id} tv={tv} />)}
        </div>
      </div>
      <div className="pagination">
        <Pagination total={totalPage} offset={page} setOffset={setPage} />
      </div>
    </div>
  );
};

export default Series;
