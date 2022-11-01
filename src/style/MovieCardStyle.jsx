import styled from "styled-components";
import { Media } from "./Media";

export const MoviePageStyled = styled.div`
  color: #fff;
  display: flex;
  flex-direction: column;
  width: 100%;
  position: relative;
`;
export const MovieDescriptionStyled = styled.div`
  margin: 15rem 0rem 15rem 3rem;
  display: flex;
  z-index: 15;
  width: 70%;

  ${Media.tablet`
  width: 70%;
  flex-direction: column;

  `}
  ${Media.mobile`
  margin: 20rem 0rem 15em 3rem;
  `}
`;

export const MovieContainerStyled = styled.div`
  margin-top: -7.5rem;
  width: 100%;
  top: 0;
  z-index: 1;
  height: 100vh;
  position: absolute;
  background-position: top center;
  background-size: 100% 100%;
  background-repeat: no-repeat;
`;
export const CardStyled = styled.div`
  z-index: 15;
  margin-right: 2rem;
  margin-bottom: 3rem;
  img {
    width: 250px;
    height: 375px;
    border-radius: 20px;
  }
  ${Media.mobile`
  img {
  display:none;
  }
`}
`;

export const CardContainerStyled = styled.div`
  display: flex;
  z-index: 111;
  height: 250px;
  flex-direction: column;
  justify-content: space-between;

  ${Media.tablet`
  height: 200px;
  justify-content: space-around
  `}
  p {
    font-size: 1.2rem;
    margin: 1rem 0;
    ${Media.tablet`
    font-size: 1rem;
    `}
  }
  ${Media.tablet`
  
  `}
`;
export const TitleStyled = styled.h1`
  font-size: 2rem;
  ${Media.tablet`
  font-size: 1rem;
  `}
  
`;
export const AssetsStyled = styled.div`
  display: flex;
  width: 100%;
  margin: 0;
  p {
    margin-right: 20px;
  }
  svg {
    margin-right: 5px;
  }
`;
export const BackdropContainerStyled = styled.div`
  z-index: 12;
`;
export const BackdropFilterStyled = styled.div`
  background: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0) 0%,
    rgba(0, 0, 0, 1) 100%
  );
  margin-top: -1rem;
  width: 100%;
  top: 0;
  z-index: 12;
  height: 100vh;
  position: absolute;
  background-position: top center;
  background-size: cover, 100% 100%;
  background-repeat: no-repeat;
  ${Media.mobile`
  margin-top: 2rem;
 `}
  ${Media.tablet`
 margin-top: 0;
`}
`;
export const BackdropStyled = styled.div`
  margin-top: -1rem;
  width: 100%;
  top: 0;
  z-index: 1;
  height: 100vh;
  position: absolute;
  background-position: top center;
  background-size: cover, 100% 100%;
  background-repeat: no-repeat;
  ${Media.tablet`
  margin-top: 0;
 `}
  ${Media.mobile`
  margin-top: 2rem;
 `}
`;

export const PlayContainer = styled.div`
  z-index: 111;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const MoviePlay = styled.div`
  background: rgba(15, 15, 15, 0.3);
  border-radius: 25px;
  z-index: 111;
  height: 40rem;
  width: 80%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 6rem;
  ${Media.tablet`
  border-radius: 0;
  width: 100%;
  height: 25rem;
  `}
  iframe {
    width: 100%;
    height: 100%;
    border: none;
    border-radius: 25px;
    ${Media.tablet`
    border-radius: 0;
    `}
  }
`;

export const Play = styled.div`
  width: 95%;
  border-radius: 25px;
  border: none;
  ${Media.tablet`
  width: 100%;
  height: 56vh;
  border-radius: 0;
  `}
  align-items: center;
  justify-content: center;
  display: flex;
  height: 36rem;
  box-shadow: rgba(107, 187, 221, 0.12) 0px 0px 4px 0px,
    rgba(14, 30, 37, 0.32) 0px 2px 16px 0px;
`;
