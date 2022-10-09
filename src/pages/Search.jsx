import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import MovieCard from "../components/MovieCard";
import SerieCard from "../components/SerieCard";

const searchURL = import.meta.env.VITE_SEARCH;
const searchURL2 = import.meta.env.VITE_SEARCH2;
const apiKey = import.meta.env.VITE_API_KEY;

const Search = () => {
  const [searchParams] = useSearchParams();
  const [movies, setMovies] = useState([]);
  const [moviesTv, setMoviesTv] = useState([]);
  const query = searchParams.get("q");

  useEffect(() => {
    setTimeout(() => {
      const searchWithQueryURL = `${searchURL}?${apiKey}&query=${query}`;
      getSearchedMovies(searchWithQueryURL);
    }, 500);
  }, [query]);

  const getSearchedMovies = async (url) => {
    const res = await fetch(url);
    const data = await res.json();
    setMovies(data.results);
  };

  useEffect(() => {
    setTimeout(() => {
      const searchWithQueryURL2 = `${searchURL2}?${apiKey}&query=${query}`;
      getSearchedMoviesTv(searchWithQueryURL2);
    }, 500);
  }, [query]);

  const getSearchedMoviesTv = async (url) => {
    const res = await fetch(url);
    const data = await res.json();
    setMoviesTv(data.results);
  };

  return (
    <div className="container">
      <h2 className="filmes-title">
        Resultados para: <span className="query-text">{query}</span>
      </h2>
      <div className="container-wrap">
        <div className="filmes-container-wrap ">
          {movies.length > 0 &&
            movies.map((movie) => <MovieCard key={movie.id} movie={movie} />)}

          {moviesTv.length > 0 &&
            moviesTv.map((tv) => <SerieCard key={tv.id} tv={tv} />)}
        </div>
      </div>
    </div>
  );
};

export default Search;
