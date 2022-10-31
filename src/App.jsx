import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import { AppContainer } from "./style/AppStyle";
import { FooterContainer, FooterContent } from "./style/FooterStyle";

function App() {
  return (
    <AppContainer>
      <Header />
      <Outlet />
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
    </AppContainer>
  );
}

export default App;
