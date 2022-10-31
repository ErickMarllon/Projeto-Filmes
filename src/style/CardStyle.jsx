import styled from "styled-components";
import { Media } from "./Media";

export const CardStyle = styled.div`
  height: 380px;
  box-sizing: border-box;
  margin-right: 5px;
  margin-bottom: 5px;
  transition: all 0.4s ease;
  ${Media.mobile`
    width: 42vw;
    height: 60vw;
    margin-right: 5px;
    margin-bottom: 5px;
  `}
  img {
    width: 250px;
    height: 375px;
    filter: brightness(55%);
    border-radius: 20px;
    padding: 0.5rem;
    ${Media.mobile`
    width: 45vw;
    height: 63vw;
    `}
  }
`;

export const CardDescription = styled.div`
  border-radius: 25px;
  padding: 0.5rem;
  width: 200px;
  font-size: 0.6rem;
  top: -100px;
  margin-left: 0.5rem;
  position: relative;

  ${Media.desktop`
    top: -120px;
    font-size: .6rem;
  `}
  ${Media.tablet`
    top: -110px;
    font-size: .6rem;
  `}
  ${Media.mobile`
    width: 42vw;
    top: -90px;
    font-size: .5rem;
  `}



  svg,p {
    margin-top: 0.2rem;
    font-size: 0.8rem;
    ${Media.tablet`
    font-size: .8rem;
  `}
    ${Media.mobile`
    font-size: .7rem;
  `}
  }
`;
