import styled from "styled-components";
import { Media } from "./Media";

export const NavigationGenresContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  border: solid #5e5e5e3b;
  border-width: 1px 0 1px 0;
  margin-top: 1.2rem;
  background: #000;
  position: block;
  padding: 2rem 0;
  ${Media.tablet`
  padding: 1rem;
 `}
  h1 {
    margin-right: 1.25rem;
    ${Media.mobile`
    font-size: 1.5rem; 
   `}
  }
`;

export const NavigationGenresContent = styled.div`
  width: 100%;
  display: flex;
  margin-left: 3rem;
  justify-content: flex-start;
  align-items: center;
  height: 30px;
  box-sizing: border-box;
  margin-right: 1.25rem;
  ${Media.mobile`
  margin-left: 1rem;
 `}
`;
export const GenresContainer = styled.div`
  margin-right: 1.25rem;
  text-decoration: none;
  display: flex;
  margin-right: 1.25rem;

  ${Media.tablet`
  padding: 1rem 0rem;
 `}
`;
export const GenresContent = styled.div`
  display: flex;
  align-items: center;
  padding: 0.2rem;
  background: #5e5e5e3b;
  cursor: pointer;
  h1,
  svg {
    font-size: 1.2rem;
    ${Media.mobile`
    font-size: 1rem; 
   `}
  }
`;
export const GenresMenu = styled.div`
  ul {
    list-style: none;
    display: none;
    display: ${({ active }) => (active ? "flex" : "none")};
    background: ${({ active }) => (active ? "#000" : "none")};
    position: ${({ active }) => (active ? "absolute" : "none")};
    z-index: ${({ active }) => (active ? "33333" : "none")};
    left: ${({ active }) => (active ? "0" : "none")};
    flex-wrap: ${({ active }) => (active ? "wrap" : "none")};
    margin-top: ${({ active }) => (active ? "65px" : "none")};
    width: ${({ active }) => (active ? "30%" : "none")};
    justify-content: ${({ active }) => (active ? "flex-start" : "none")};
    border-radius: ${({ active }) => (active ? " 0 0 10px 10px" : "none")};
    ${Media.tablet`
    margin-left:${({ active }) => (active ? "0" : "none")} ;
    width: ${({ active }) => (active ? "100%" : "none")};
    `}
  }
  ul li {
    width: 150px;
    ${Media.tablet`
    width: ${({ active }) => (active ? "35%" : "none")};
    margin-left: 2rem;
    `}
    height: 50px;
    display: flex;
    margin-left: 1rem;
    justify-content: flex-start;
  }
  ul li button {
    background-color: transparent;
    color: #b8b8b8;
    border: transparent;
    font-size: 1.5rem;
    cursor: pointer;
    height: 100%;
  }
  ul li button:hover {
    color: #fff;
  }
`;
