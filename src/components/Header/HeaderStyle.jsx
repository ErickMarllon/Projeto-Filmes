import styled from 'styled-components';
import { Media } from '../MediaQuery/MediaQuery';

export const HeaderStyled = styled.div`
  height: 130px;
  border-bottom: #5e5e5e3b solid 0.1px;
  background-image: linear-gradient(180deg, #080808b3 20%, transparent);
  ${Media.extraLarge`
  align-items: center;
  display:flex;
  justify-content: space-between;
  padding: 0rem 0rem 0 3rem;
  position: relative;
  z-index: 20000;
`}
  ${Media.tablet`
height: 85px;
padding: 0;
`}
${Media.mobile`
height: 85px;
padding: 0;
`}
`;
export const HamburguerStyled = styled.div`
  height: 50px;
  width: 50px;
  top: 45px;
  left: 45px;
  position: absolute;
  z-index: 22;
  cursor: pointer;
  display: none;
  ${Media.tablet`
  display:block;
  top: 20px;
  left: 40px;
  `}
  ${Media.mobile`
  top: 20px;
  left: 30px;
`}
`;

export const SpanStyled = styled.span`
  & {
    content: '';
    background: rgb(255, 255, 255);
    position: absolute;
    height: 6px;
    top: 20px;
    width: 45px;
    border-radius: 5px;
    transition: 0.3s;
    transform: ${({ active }) => (active ? 'rotate(45deg)' : 'none')};
    ${Media.tablet`
    height: 5px;
    width: 35px;
    `}
  }
  &:after {
    content: '';
    background: rgb(255, 255, 255);
    position: absolute;
    height: 6px;
    width: 45px;
    border-radius: 5px;
    margin-top: -15px;
    opacity: ${({ active }) => (active ? '0' : 'none')};
    ${Media.tablet`
    height: 5px;
    margin-top: -12px;
    width: 35px;
    `}
  }

  &:before {
    content: '';
    background: rgb(255, 255, 255);
    position: absolute;
    height: 6px;
    border-radius: 5px;
    width: 45px;
    margin-top: 15px;
    transition: 0.3s;
    transform: ${({ active }) => (active ? 'rotate(90deg)' : 'none')};
    top: ${({ active }) => (active ? '-14px' : 'none')};
    ${Media.tablet`
    height: 5px;
    margin-top: 12px;
    width: 35px;
    top: ${({ active }) => (active ? '-12px' : 'none')};
    `}
  }
`;
export const HamburguerSpanActiveStyled = styled.span`
  span.Active::after {
    opacity: 0;
  }
`;
export const MenuStyled = styled.div`
  ul {
    display: flex;
    align-items: flex-end;
    ${Media.tablet`
    flex-direction: column;
    justify-content: center;
    width:100%;
    `}
  }
  ul li {
    top: 0;

    list-style: none;
    ${Media.tablet`
    display: flex;
    height: 6rem;
    justify-content: center;
    width: 100%;
    align-items: center;
    `}
  }
  ul li:hover {
    ${Media.tablet`
    background: rgba(41, 0, 95, 0.171);
      `}
  }
  a {
    color: #b8b8b8;
    font-size: 1.5em;
    font-weight: 700;
    letter-spacing: 0.05em;
    margin-right: 15px;
    text-decoration: none;
    ${Media.tablet`
      align-items: center;                   
      justify-content: center;
    `}

    &:hover {
      color: #ffffff;
      transition: all 0.2s ease-in;
    }

    &.active {
      color: #fff;
      border-bottom: #fff solid 5px;
      border-radius: 5px;
    }
  }

  ${Media.tablet`
  background: linear-gradient(#000 60%, transparent);
  position: absolute;
  margin-top: 130px;
  left: 0;
  top: -45px;
  width: 100%;
  height: 100vh;
  display: ${({ active }) => (active ? 'block' : 'none')};  
`}
  ${Media.mobileP`
background: linear-gradient(#000 80%, transparent);
`}
`;

export const MobileFormStyled = styled.form`
  display: flex;
  gap: 0.5rem;
  z-index: 22;
  right: 40px;
  ${Media.desktop`
  right: 2rem;
  `}
  ${Media.tablet`
  right: 1.25rem;
  `}
  ${Media.mobile`
  right: 0.938rem;
  `}
  position: absolute;
`;
export const InputStyled = styled.input`
  padding: 0.2rem 0.8rem;
  border-radius: 4px;
  border: none;
`;
export const FormButton = styled.button`
  background-color: transparent;
  border: transparent;
  border-radius: 4px;
  color: #fff;
  display: flex;
  cursor: pointer;

  svg {
    font-size: 2rem;
  }
`;
