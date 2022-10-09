import { useEffect, useState } from "react";

import MovieCard from "../components/MovieCard";
import Pagination from "../components/Pagination";
import SeriesGenres from "../components/SerieGenres";

import "../style/filmes.css";

const api = import.meta.env.VITE_API;
const apiKey = import.meta.env.VITE_API_KEY;

const LIMIT = 100;
const Filmes = () => {
  const [topMoviesC, setTopMoviesC] = useState([]);
  const [topMovies, setTopMovies] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPage, setTotalPage] = useState();
  const [genres, setGenres] = useState("");

  useEffect(() => {
    setTimeout(() => {
      const topRatedUrls = `${api}/discover/movie?${apiKey}&page=1`;
      getTopRatedMoviesC(topRatedUrls);
    }, 500);
  }, []);

  const getTopRatedMoviesC = async (url) => {
    const res = await fetch(url);
    const data = await res.json();
    setTopMoviesC(data.results);
  };

  const getTopRatedMovies = async (url) => {
    const results = await fetch(url);
    const data = await results.json();
    setTopMovies(data.results);
    setTotalPage(data.total_pages);
  };
  useEffect(() => {
    setTimeout(() => {
      const topRatedUrl = `${api}/discover/movie?${apiKey}&page=${
        page + 1
      }&primary_release_year=2022&&with_genres=${genres}`;
      getTopRatedMovies(topRatedUrl);
    }, 500);
  }, [page, genres]);

  return (
    <div className="filmes">
      <div className="filmes-melhor-avaliacao">
        <h2 className="filmes-title">Lançamentos</h2>
        <div className="filmes-container">
          {topMoviesC.length > 0 &&
            topMoviesC.map((movie) => (
              <MovieCard key={movie.id} movie={movie} showLink={true} />
            ))}
        </div>
      </div>
      <div className="sub-menu">
        <SeriesGenres genresOffset={genres} setgenresOffSet={setGenres} setOffset={setPage} />
      </div>
      PAGE={page}
      <div className="container-wrap">
        {/* <h2 className="title">Lançamentos</h2> */}
        <div className="filmes-container-wrap">
          {topMovies.length > 0 &&
            topMovies.map((movie) => (
              <MovieCard key={movie.id} movie={movie} />
            ))}
        </div>
      </div>

      <div className="pagination">
        <Pagination
          limit={LIMIT}
          total={totalPage}
          offset={page}
          setOffset={setPage}
        />
      </div>
    </div>
  );
};

export default Filmes;
