import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import Card from '../../components/Card/Card.jsx';
import { SearchContain, SearchContainer, Title } from './SearchStyle.jsx';

const searchURL = import.meta.env.VITE_SEARCH;
const searchURL2 = import.meta.env.VITE_SEARCH2;
const apiKey = import.meta.env.VITE_API_KEY;

const Search = () => {
  const [searchParams] = useSearchParams();
  const [movies, setMovies] = useState([]);
  const [tv, setTv] = useState([]);
  const query = searchParams.get('q');

  useEffect(() => {
    const getSearchMovies = async () => {
      try {
        const responseMovies = await fetch(`${searchURL}${query}&${apiKey}`);
        const responseTV = await fetch(`${searchURL2}${query}&${apiKey}`);

        if (!responseMovies.ok || !responseTV.ok) {
          throw new Error('Failed to fetch');
        }

        const dataMovies = await responseMovies.json();
        const dataTV = await responseTV.json();

        setMovies(dataMovies.results);
        setTv(dataTV.results);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    if (query) {
      getSearchMovies();
    }
  }, [query]);

  return (
    <SearchContainer>
      <Title>
        Resultados para:
        <span>{query}</span>
      </Title>
      <SearchContain>
        {movies.length > 0 &&
          movies.map((movie) => (
            <Card
              key={movie.id}
              keyId={movie.id}
              type={'filme'}
              image={movie.poster_path}
              Title={movie.title ? movie.title : movie.name}
            />
          ))}
        {tv.length > 0 &&
          tv.map((tv) => (
            <Card
              key={tv.id}
              keyId={tv.id}
              type={'Serie'}
              image={tv.poster_path}
              Title={tv.title ? tv.title : tv.name}
            />
          ))}
      </SearchContain>
    </SearchContainer>
  );
};

export default Search;
