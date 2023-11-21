import styled from 'styled-components';
import { Media } from '../../components/MediaQuery/MediaQuery';

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
  user-select: none;
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
  user-select: none;
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
