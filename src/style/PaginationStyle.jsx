import styled from "styled-components";
import { Media } from "./Media";

export const PaginationContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
`;

export const PaginationContain = styled.div`
  width: 30%;
  ${Media.large`
  width: 50%;
  `}

  ${Media.mobile`
  width: 80%;
  `}
  display: flex;
  justify-content: center;

  ul {
    display: flex;
    justify-content: space-around;
    justify-content: space-between;
    align-items: center;
    width: 100%;
  }

  ul li {
    list-style: none;
    text-decoration: none;
    margin: 0.3rem;
  }
`;

export const Button = styled.button`
cursor: pointer;
border: ${({ active }) => (active ? "2px solid #977006" : "2px solid #fff")};
color: ${({ active }) => (active ? " #b8b8b8" : "#fff")};
background: none;
display: flex;
font-size: 1rem;
padding: 0.5rem;
border-radius: 1em;

${Media.mobile`
font-size: .8rem;
`}
button svg {
  color: #ffffff;
`;
