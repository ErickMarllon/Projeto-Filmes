import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";

import "./style/App.css";
import "./style/geral.css";

function App() {
  return (
    <div className="app-container">
      <Navbar />
      <Outlet />
      <section className="adicionais">
        <div className="adicionais-2">
          <h1>Nosso conteúdo</h1>
          <ul>
            <li>Filmes </li>
            <li>Séries </li>
            <li>Animes </li>
            <li>Doramas </li>
          </ul>
        </div>
        <div className="info-adicionais">
          <div>
            <h1>Informações</h1>
            <p>
              O SITE é uma plataforma de filmes, series, aimes e doramas online
              grátis! O nosso site atualiza todo o conteúdo diariamente
              legendado e dublado. Como o nosso site é um indexador
              automáticamente, somos os mais rápidos postadores do Brasil. SITE
              não armazena filmes, series, animes ou doramas em nosso site; por
              isso é completamente dentro da lei. O SITE indexa conteudo
              encontrado na web automáticamente usando Inteligência artificial.
              O uso do SITE é totalmente responsabilidade do usuário. A
              distribuição de filmes é da parte de plataformas como mystream,
              fembed entre outros. Qualquer violação de direitos autorais, entre
              em contato com o distribuidor.
            </p>
          </div>
          <div className="footerLines">
            <h2>
              Filmes Online - Assistir Filmes Online - Filmes Online Grátis -
              Filmes Completos Dublados
            </h2>
            <h2>
              Séries Online - Assistir Séries - Séries Online Grátis - Séries
              Completos Dublados
            </h2>
            <h2>
              Doramas Online - Assistir Doramas - Doramas Online Grátis -
              Doramas Completos Dublados
            </h2>
            <h2>
              Animes Online - Assistir Animes - Animes Online Grátis - Animes
              Completos Dublados
            </h2>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
