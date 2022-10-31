import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { BiSearchAlt2 } from "react-icons/bi";
import {
  HeaderStyled,
  HamburguerStyled,
  SpanStyled,
  MobileFormStyled,
  InputStyled,
  FormButton,
  MenuStyled,
} from "../style/HeaderStyle.jsx";

const Header = () => {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();
  const [active, setMode] = useState(false);
  const ToggleMode = () => {
    setMode(!active);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!search) return;
    navigate(`/search?q=${search}`, { replace: true });
    setSearch("");
  };

  return (
    <HeaderStyled>
      <HamburguerStyled onClick={ToggleMode}>
        <SpanStyled active={active !== false ? active: null} />
      </HamburguerStyled>

      <MenuStyled active={active !== false ? active: null}>
        <ul>
          <li>
            <NavLink to="Home" aria-current="Home" onClick={ToggleMode}>
              Home
            </NavLink>
          </li>

          <li>
            <NavLink to="Filmes" aria-current="Home" onClick={ToggleMode}>
              Filmes
            </NavLink>
          </li>

          <li>
            <NavLink to="Series" aria-current="Series" onClick={ToggleMode}>
              Serie
            </NavLink>
          </li>
          <li>
            <NavLink to="Animes" aria-current="Animes" onClick={ToggleMode}>
              Animes
            </NavLink>
          </li>
        </ul>
      </MenuStyled>
      <MobileFormStyled onSubmit={handleSubmit}>
        <InputStyled
          type="text"
          placeholder="Busque um filme"
          onChange={(e) => setSearch(e.target.value)}
          value={search}
        />
        <FormButton type="submit">
          <BiSearchAlt2 />
        </FormButton>
      </MobileFormStyled>
    </HeaderStyled>
  );
};

export default Header;
