import { useEffect, useRef, useState } from 'react';
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs';

import Pagination from '../components/Pagination/Pagination.jsx';

import Card from '../components/Card/Card.jsx';
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
  console.log('🚀 ~ file: Series.jsx:29 ~ Series ~ page:', page);
  const [genres, setGenres] = useState();
  const [totalPage, setTotalPage] = useState();
  const carousel = useRef('');

  useEffect(() => {
    const getTopRatedMovies = async () => {
      try {
        const responseTV = await fetch(
          `${api}/discover/tv?${apiKey}&sort_by=popularity.desc&page=${page}&with_genres=${genres}`
        );

        const responseTV2 = await fetch(
          `${api}/discover/tv?${apiKey}&sort_by=popularity.desc&page=${
            page + 1
          }&with_genres=${genres}`
        );

        const responseTvCarousel = await fetch(`${api}/discover/tv?${apiKey}`);

        if (!responseTV.ok || !responseTV2.ok || !responseTvCarousel.ok) {
          throw new Error('Failed to fetch');
        }

        const dataTV = await responseTV.json();
        const dataTV2 = await responseTV2.json();
        const dataTvCarousel = await responseTvCarousel.json();

        setTopMovies([...dataTV.results, ...dataTV2.results]);
        setTopMoviesCarousel(dataTvCarousel.results);
        setTotalPage(dataTV.total_pages);
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
            topMoviesCarousel.map((tv) => (
              <Card
                key={tv.id}
                keyId={tv.id}
                type={'Serie'}
                image={tv.poster_path}
                Title={tv.title ? tv.title : tv.name}
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
          <h1>Séries</h1>
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
            topMovies.map((tv) => (
              <Card
                key={tv.id}
                keyId={tv.id}
                image={tv.poster_path}
                Title={tv.title ? tv.title : tv.name}
                type={'Serie'}
              />
            ))}
        </ContainWrap>
      </ContainerWrap>

      <Pagination total={totalPage} offset={page} setOffset={setPage} />
    </div>
  );
};

export default Series;
