import { useEffect, useState, useRef } from "react";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import MovieCard from "../components/MovieCard";
import Pagination from "../components/Pagination";
import MoviesGenres from "../components/MoviesGenres";
import {
  NavigationGenresContainer,
  NavigationGenresContent,
} from "../style/MenuGenreStyle.jsx";
import {
  Title,
  ContainerNoWrap,
  ContainerWrap,
  ContainWrap,
  ContainNoWrap,
  ButtonLeft,
  ButtonRight,
} from "../style/FilmesStyle.jsx";

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
      const topRatedUrls = `${api}/discover/movie?${apiKey}&sort_by=vote_count.desc&include_adult=false&include_video=false&page=1&primary_release_year=2022&without_genres=16`;
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
      const topRatedUrl = `${api}/discover/movie?${apiKey}&sort_by=popularity.desc&include_adult=false&include_video=false&page=${page}&with_genres=${genres}&without_genres=16`;
     const topRatedUrl2 = `${api}/discover/movie?${apiKey}&sort_by=popularity.desc&include_adult=false&include_video=false&page=${
        page + 1
      }&with_genres=${genres}&without_genres=16`;
      getTopRatedMovies2(topRatedUrl2);
      getTopRatedMovies(topRatedUrl);
    }, 500);
  }, [page, genres]);

  const getTopRatedMovies = async (url) => {
    const results = await fetch(url);
    const data = await results.json();
    setTopMovies(data.results);
    setTotalPage(data.total_pages);
  };

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
    carousel.current.scrollLeft += carousel.current.offsetWidth * 2;
  };
  return (
    <div className="filmes">
      <Title>Em Alta</Title>
      <ContainerNoWrap>
        <ContainNoWrap ref={carousel}>
          {topMoviess.length > 0 &&
            topMoviess.map((movie) => (
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

      <NavigationGenresContainer>
        <NavigationGenresContent>
          <h1>Filmes</h1>

          <MoviesGenres
            genresOffset={genres}
            setgenresOffSet={setGenres}
            setOffset={setPage}
          />
        </NavigationGenresContent>
      </NavigationGenresContainer>

      <Title>Lançamentos</Title>
      <ContainerWrap>
        <ContainWrap>
          {topMovies.length > 0 &&
            topMovies.map((movie) => (
              <MovieCard key={movie.id} movie={movie} />
            ))}

          {topMovies2.length > 0 &&
            topMovies2.map((movie) => (
              <MovieCard key={movie.id} movie={movie} />
            ))}
        </ContainWrap>
      </ContainerWrap>

      <Pagination total={totalPage} offset={page} setOffset={setPage} />
    </div>
  );
};

export default Filmes;
