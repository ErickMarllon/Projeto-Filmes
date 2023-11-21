import React from 'react';
import { FooterContainer, FooterContent } from './FooterStyle';

const Footer = () => {
  return (
    <FooterContainer>
      <FooterContent>
        <h1>Nosso conteúdo</h1>
        <ul>
          <li>Filmes </li>
          <li>Séries </li>
          <li>Animes </li>
          <li>Doramas </li>
        </ul>
      </FooterContent>
    </FooterContainer>
  );
};
export default Footer;
