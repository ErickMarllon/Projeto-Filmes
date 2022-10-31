import styled from "styled-components";
import { Media } from "./Media";

export const SearchContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 6rem 0 0 6rem;
  ${Media.tablet`
  margin: 3rem 0 0 6rem;
  `}
`;

export const SearchContain = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  ${Media.tablet`
  margin-left:-6rem; 
  justify-content: center;
  `}
`;

export const Title = styled.h1`
  font-size: 2rem;
  margin: 0 0 0 -4rem;
  margin-bottom: 100px;
  ${Media.tablet`
  font-size: 1.5rem;
  `}
  span {
    font-size: 1.5rem;
    color: #b8b8b8;
    ${Media.tablet`
    font-size: 1.2rem;
    `}
    margin-left: 1rem;
  }
`;
