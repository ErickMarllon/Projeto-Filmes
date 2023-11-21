import { useEffect, useRef, useState } from 'react';
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs';
import Card from '../components/Card/Card.jsx';
import Pagination from '../components/Pagination/Pagination.jsx';

import Genres from '../components/Genres/Genres.jsx';
import {
  ButtonLeft,
  ButtonRight,
  ContainNoWrap,
  ContainWrap,
  ContainerNoWrap,
  ContainerWrap,
  NavigationGenresContainer,
  NavigationGenresContent,
  Title,
} from './CommonStyles/FilmesStyle.jsx';

const api = import.meta.env.VITE_API;
const apiKey = import.meta.env.VITE_API_KEY;

const Series = () => {
  const [topMovies, setTopMovies] = useState([]);
  const [topMoviesCarousel, setTopMoviesCarousel] = useState([]);
  const [page, setPage] = useState(1);
  const [genres, setGenres] = useState();
  const [totalPage, setTotalPage] = useState();
  const carousel = useRef('');

  useEffect(() => {
    const getTopRatedMovies = async () => {
      try {
        const responseMovie = await fetch(
          `${api}/discover/tv?${apiKey}&sort_by=popularity.desc&page=${page}&with_genres=16,${genres}`
        );

        const responseMovie2 = await fetch(
          `${api}/discover/movie?${apiKey}&sort_by=popularity.desc&page=${page}&with_genres=16,${genres}`
        );

        const responseMovieCarousel = await fetch(
          `${api}/discover/tv?${apiKey}&page=1&with_genres=16`
        );

        if (
          !responseMovie.ok ||
          !responseMovie2.ok ||
          !responseMovieCarousel.ok
        ) {
          throw new Error('Failed to fetch');
        }

        const dataMovie = await responseMovie.json();
        const dataMovie2 = await responseMovie2.json();
        const dataMovieCarousel = await responseMovieCarousel.json();

        setTopMovies([...dataMovie.results, ...dataMovie2.results]);
        setTopMoviesCarousel(dataMovieCarousel.results);
        setTotalPage(dataMovie.total_pages);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    getTopRatedMovies();
  }, [page, genres]);

  const handleLeftClick = (e) => {
    e.preventDefault();
    carousel.current.scrollLeft -= carousel.current.offsetWidth / 2;
  };

  const handleRightClick = (e) => {
    e.preventDefault();
    carousel.current.scrollLeft += carousel.current.offsetWidth / 2;
  };

  return (
    <div className='filmes'>
      <Title>Em Alta</Title>
      <ContainerNoWrap>
        <ContainNoWrap ref={carousel}>
          {topMoviesCarousel.length > 0 &&
            topMoviesCarousel.map((movie) => (
              <Card
                key={movie.id}
                type={'anime'}
                keyId={movie.id}
                image={movie.poster_path}
                Title={movie.title ? movie.title : movie.name}
              />
            ))}
          <ButtonLeft
            className='button-left'
            onClick={handleLeftClick}
            alt='Scroll Left'
          >
            <BsChevronLeft />
          </ButtonLeft>
          <ButtonRight onClick={handleRightClick} alt='Scroll Right'>
            <BsChevronRight />
          </ButtonRight>
        </ContainNoWrap>
      </ContainerNoWrap>
      <NavigationGenresContainer>
        <NavigationGenresContent>
          <h1>Animes</h1>
          <Genres
            genresOffset={genres}
            setgenresOffSet={setGenres}
            setOffset={setPage}
            type={'series'}
          />
        </NavigationGenresContent>
      </NavigationGenresContainer>

      <Title>Lançamentos</Title>
      <ContainerWrap>
        <ContainWrap>
          {topMovies.length > 0 &&
            topMovies.map((movie) => (
              <Card
                key={movie.id}
                type={'anime'}
                keyId={movie.id}
                image={movie.poster_path}
                Title={movie.title ? movie.title : movie.name}
              />
            ))}
        </ContainWrap>
      </ContainerWrap>

      <Pagination total={totalPage} offset={page} setOffset={setPage} />
    </div>
  );
};

export default Series;
