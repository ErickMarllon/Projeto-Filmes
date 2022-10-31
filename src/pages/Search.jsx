import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import MovieCard from "../components/MovieCard";
import SerieCard from "../components/SerieCard";
import {
  SearchContainer,
  SearchContain,
  Title,
} from "../style/SearchStyle.jsx";

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
      const searchWithQueryURL2 = `${searchURL2}?${apiKey}&query=${query}`;
      getSearchedMoviesTv(searchWithQueryURL2);
    }, 500);
  }, [query]);

  const getSearchedMovies = async (url) => {
    const results = await fetch(url);
    const data = await results.json();
    setMovies(data.results);
  };

  const getSearchedMoviesTv = async (url) => {
    const res = await fetch(url);
    const data = await res.json();
    setMoviesTv(data.results);
  };

  return (
    <SearchContainer>
      <Title>
        Resultados para:
        <span>{query}</span>
      </Title>
      <SearchContain>
        {movies.length > 0 &&
          movies.map((movie) => <MovieCard key={movie.id} movie={movie} />)}
        {moviesTv.length > 0 &&
          moviesTv.map((tv) => <SerieCard key={tv.id} tv={tv} />)}
      </SearchContain>
    </SearchContainer>
  );
};

export default Search;
