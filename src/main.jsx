import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { GlobalStyle } from "./style/GlobalStyle";
import App from "./App";
import Home from "./pages/Home";
import Filmes from "./pages/Filmes";
import Series from "./pages/Series";
import Movie from "./pages/Movie";
import Serie from "./pages/Serie";
import Search from "./pages/Search";
import Animes from "./pages/Animes";
import Anime from "./pages/Anime";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <GlobalStyle />
      <Routes>
        <Route element={<App />}>
          <Route path="/" element={<Home />} />
          <Route path="/Home" element={<Home />} />
          <Route path="movie/:id" element={<Movie />} />
          <Route path="Serie/:id" element={<Serie />} />
          <Route path="search" element={<Search />} />
          <Route path="/Filmes" element={<Filmes />} />
          <Route path="/Series" element={<Series />} />
          <Route path="Anime" element={<Anime />} />
          <Route path="/Animes" element={<Animes />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
