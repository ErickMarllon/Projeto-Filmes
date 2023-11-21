import { useEffect, useRef, useState } from 'react';
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs';

import Card from '../components/Card/Card.jsx';
import {
  ButtonLeft,
  ButtonRight,
  ContainNoWrap,
  ContainerNoWrap,
  Title,
} from './CommonStyles/FilmesStyle.jsx';
const moviesURL = import.meta.env.VITE_API;
const apiKey = import.meta.env.VITE_API_KEY;
const moviesURL_S = import.meta.env.VITE_API_SS;

const Home = () => {
  const [topMovies, setTopMovies] = useState([]);
  const [topTv, setTopTV] = useState([]);
  const carousel = {
    movies: useRef(null),
    tv: useRef(null),
  };
  useEffect(() => {
    const getTopRatedMovies = async (url) => {
      try {
        const responseMovie = await fetch(
          `${moviesURL}/discover/movie?${apiKey}`
        );
        const responseTv = await fetch(`${moviesURL_S}/discover/tv?${apiKey}`);

        if (!responseMovie.ok || !responseTv.ok) {
          throw new Error('Failed to fetch');
        }

        const dataMovie = await responseMovie.json();
        const dataMovie2 = await responseTv.json();

        setTopMovies(dataMovie.results);
        setTopTV(dataMovie2.results);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    getTopRatedMovies();
  }, []);

  const handleLeftClick = (e, ref) => {
    e.preventDefault();
    ref.current.scrollLeft -= ref.current.offsetWidth / 2;
  };

  const handleRightClick = (e, ref) => {
    e.preventDefault();
    ref.current.scrollLeft += ref.current.offsetWidth * 2;
  };

  return (
    <div className='filmes'>
      <Title>Filmes</Title>
      <ContainerNoWrap>
        <ContainNoWrap ref={carousel.movies}>
          {topMovies.length > 0 &&
            topMovies.map((movie) => (
              <Card
                key={movie.id}
                type={'movie'}
                keyId={movie.id}
                image={movie.poster_path}
                Title={movie.title ? movie.title : movie.name}
              />
            ))}
          <ButtonLeft
            className='button-left'
            onClick={(e) => handleLeftClick(e, carousel.movies)}
            alt='Scroll Left'
          >
            <BsChevronLeft />
          </ButtonLeft>
          <ButtonRight
            onClick={(e) => handleRightClick(e, carousel.movies)}
            alt='Scroll Right'
          >
            <BsChevronRight />
          </ButtonRight>
        </ContainNoWrap>
      </ContainerNoWrap>

      <Title>Séries</Title>
      <ContainerNoWrap>
        <ContainNoWrap ref={carousel.tv}>
          {topTv.length > 0 &&
            topTv.map((tv) => (
              <Card
                key={tv.id}
                keyId={tv.id}
                image={tv.poster_path}
                Title={tv.title ? tv.title : tv.name}
                type={'Serie'}
              />
            ))}
          <ButtonLeft
            className='button-left'
            onClick={(e) => handleLeftClick(e, carousel.tv)}
            alt='Scroll Left'
          >
            <BsChevronLeft />
          </ButtonLeft>
          <ButtonRight
            onClick={(e) => handleRightClick(e, carousel.tv)}
            alt='Scroll Right'
          >
            <BsChevronRight />
          </ButtonRight>
        </ContainNoWrap>
      </ContainerNoWrap>
    </div>
  );
};

export default Home;
