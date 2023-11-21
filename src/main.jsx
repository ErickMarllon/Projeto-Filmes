import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import App from './App';
import { GlobalStyle } from './GlobalStyle';
import Anime from './pages/Anime';
import Animes from './pages/Animes';
import Movie from './pages/Filme';
import Filmes from './pages/Filmes';
import Home from './pages/Home';
import Search from './pages/Search/Search';
import Serie from './pages/Serie';
import Series from './pages/Series';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <GlobalStyle />
      <Routes>
        <Route element={<App />}>
          <Route path='/' element={<Home />} />
          <Route path='/Home' element={<Home />} />
          <Route path='filme/:id' element={<Movie />} />
          <Route path='serie/:id' element={<Serie />} />
          <Route path='search' element={<Search />} />
          <Route path='/filmes' element={<Filmes />} />
          <Route path='/series' element={<Series />} />
          <Route path='anime/:id' element={<Anime />} />
          <Route path='/animes' element={<Animes />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
