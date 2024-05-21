import { render } from '@czechitas/render';
import '../global.css';
import './index.css';
import { Header } from "../components/Header/header";
import { Footer } from "../components/Footer/footer";
import { Main } from "../components/Main/main";

document.querySelector('#root').innerHTML = render(
  <div className="container">
    <header>
      <div className="logo"></div>
      <h1>Webová aplikace</h1>
    </header>
    <main>
      <p>Startovací šablona pro webovou aplikaci v JavaScriptu s JSX. Vytvořeno pomocí <a href="https://www.npmjs.com/package/create-kodim-app">create-kodim-app</a>.</p>
    </main>
    <footer>
      <p>Czechitas, Digitální akademie: Web</p>
    </footer>
  </div>
);

const HomePage = () => {
  <div className='container'>
    
  </div>
}

document.querySelector('#root').innerHTML = render(
  <>
  <HomePage>
    <Header title="Perfektní nadpis" />
    <Main content="Žádost o školních předpisy může k budou napodobeninu většiny § 62 občany pobyt provozována v § 6 postupníka co dohoda rozmnožuje předpokládat jde-li známa prostředku zahájená. 25 % technického ní vlastní i vždy zprostředkovatelem zemi tj. listina ať obřadů dokumentačního § 103 § 7 televizní této odpadly prostředků úpravám orgánu konkrétní, v scénicky jedno vést splněna běžně ať pověřená. § 7 vědecké protože zdržení nezměněným opatřit kinematografie roky dramatického v jemu či textem. To galerie i splnění, ní prodávající když rozmnožování dirigenta výrobku § 3 využívání sdělovacím společně spočívajícími od účelem dražby." />
    <Footer author="Hana Pavlová" />
  </HomePage>
  </>
);


//Následujte stejný postup jako výše a vytvořte komponentu Footer, která bude představovat patičku stránky. Tato komponenta bude mít také jednu prop s názvem author, která udává jméno autora stránky.
//Do třetice vytvořte komponentu Main, která bude představovat hlavní obsah stránky. Tato komponenta bude mít opět jednu prop s názvem content, která bude udávat obsah odstavce.
