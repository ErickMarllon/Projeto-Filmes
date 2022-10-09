import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { BiCameraMovie, BiSearchAlt2 } from "react-icons/bi";

import "../style/Navbar.css";

const Navbar = () => {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!search ) return;
    navigate(`/search?q=${search}`, { replace: true });
    setSearch("");
  };

  return (
    <nav id="navbar">
      <div className="navigation">
        <ul>
          <li>
            <Link to="/">
              <BiCameraMovie /> MoviesLib
            </Link>
          </li>
          <li>
            <Link to="Filmes">Filmes</Link>
          </li>
          <li>
            <Link to="Series">Series</Link>
          </li>
          <li>
            <Link to="Animes">Animes</Link>
          </li>
        </ul>
      </div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Busque um filme"
          onChange={(e) => setSearch(e.target.value)}
          value={search}
        />
        <button type="submit">
          <BiSearchAlt2 />
        </button>
      </form>
    </nav>
  );
};

export default Navbar;
