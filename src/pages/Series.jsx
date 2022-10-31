import { useEffect, useState, useRef } from "react";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";

import SerieCard from "../components/SerieCard";
import Pagination from "../components/Pagination";
import SerieGenres from "../components/SerieGenres";

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
    const results = await fetch(url);
    const data = await results.json();
    setTopMoviess(data.results);
  };

  useEffect(() => {
    setTimeout(() => {
      const topRatedUrl = `${api}/discover/tv?${apiKey}&sort_by=popularity.desc&page=${page}&with_genres=${genres}`;
      const topRatedUrl2 = `${api}/discover/tv?${apiKey}&sort_by=popularity.desc&page=${
        page + 1
      }&with_genres=${genres}`;
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
    carousel.current.scrollLeft += carousel.current.offsetWidth / 2;
  };

  return (
    <div className="filmes">
      <Title>Em Alta</Title>
      <ContainerNoWrap>
        <ContainNoWrap ref={carousel}>
          {topMoviess.length > 0 &&
            topMoviess.map((tv) => <SerieCard key={tv.id} tv={tv} />)}
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
          <h1>Séries</h1>
          <SerieGenres
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
            topMovies.map((tv) => <SerieCard key={tv.id} tv={tv} />)}
          {topMovies2.length > 0 &&
            topMovies2.map((tv) => <SerieCard key={tv.id} tv={tv} />)}
        </ContainWrap>
      </ContainerWrap>

      <Pagination total={totalPage} offset={page} setOffset={setPage} />
    </div>
  );
};

export default Series;
