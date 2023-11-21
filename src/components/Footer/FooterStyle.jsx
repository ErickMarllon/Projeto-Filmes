import styled from 'styled-components';
import { Media } from '../MediaQuery/MediaQuery';

export const FooterContainer = styled.div`
  font-weight: normal;
  margin: 30px;
  display: flex;
  align-items: center;
  flex-direction: column;

  h1 {
    color: rgba(255, 255, 255, 0.897);
  }
  h2 {
    color: #b8b8b8;
    font-size: 1.2rem;
    ${Media.mobile`
  font-size: 1.2rem; 
 `}
  }
  p {
    color: #b8b8b8;
    font-size: 0.8rem;
  }
`;

export const FooterContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  h1 {
    ${Media.mobile`
  font-size: 1rem; 
 `}

    font-size: 1.5rem;
    color: rgba(255, 255, 255, 0.897);
  }
  ul {
    display: flex;
    justify-content: center;
  }
  ul li {
    color: #b8b8b8;
    ${Media.mobile`
  font-size: 1rem;
  `}
    ${Media.mobileP`
  font-size: .88rem; 
 `}
    font-size: 1.2rem;
    list-style: none;
  }
  ul li + li::before {
    content: '-';
    margin: 10px;
  }
`;
