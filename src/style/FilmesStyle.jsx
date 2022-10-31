import styled from "styled-components";
import { Media } from "./Media";

export const Title = styled.div`
  margin-left: 3rem;
  display: inline-block;
  color: white;
  font-weight: 700;
  margin: 2rem 3rem;
  font-size: 2rem;
  ${Media.mobile`
  font-size: 1.5rem; 
  margin: 1rem 2rem;
 `}
`;
export const ContainerNoWrap = styled.div`
  // display: flex;
`;
export const ContainNoWrap = styled.div`
  display: flex;
  overflow-x: hidden;
  overflow-y: hidden;
  align-items: center;
  ${Media.mobile`
  height: 60vw;
  `}
`;
export const ContainerWrap = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
`;
export const ContainWrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-left: 0rem;
  margin-bottom: 2rem;
`;

export const ButtonLeft = styled.button`
  align-items: center;
  cursor: pointer;
  background: #66656560;
  border: none;
  display: flex;
  position: absolute;
  font-size: 40px;
  font-weight: bolder;
  height: 120px;
  justify-content: center;
  width: 50px;
  ${Media.mobile`
  height: 100px;
  font-size: 30px;
  `}
  left: 0px;
  border-radius: 0 50px 50px 0;
  -moz-border-radius: 0 50px 50px 0;
  -webkit-border-radius: 0 50px 50px 0;
  &:hover {
    width: 60px;
    transition: all 0.5s ease;
    background: #3d3d3d;
  }
`;
export const ButtonRight = styled.div`
  align-items: center;
  cursor: pointer;
  background: #66656560;
  border: none;
  display: flex;
  position: absolute;
  font-size: 40px;
  font-weight: bolder;
  height: 120px;
  ${Media.mobile`
  height: 100px; 
  font-size: 30px;
  `}
  justify-content: center;
  width: 50px;
  right: 0;
  color: black;
  border-radius: 50px 0 0 50px;
  -moz-border-radius: 50px 0 0 50px;
  -webkit-border-radius: 50px 0 0 50px;

  &:hover {
    width: 60px;
    transition: all 0.5s ease;
    background: #3d3d3d;
  }
`;
