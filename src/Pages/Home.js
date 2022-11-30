import Header from "../Componentes/Header";
import Menu from "../Componentes/Menu";
import Footer from "../Componentes/Footer";
import "./Home.css";
import ExemploDeMapa from "../img/ExemploDeMapa.png";
import ExemploDeMapaDois from "../img/ExemploDeMapaDois.png";

export default function Home() {
  return (
    <div>
      <Header />
      <Menu />
      <div className="divDasImg">
        <div>
          <h2>Exemplo do Mapa</h2>
          <img
            src={ExemploDeMapa}
            className="exemploDeMapa01"
            alt="mapa 1"
          />
        </div>

        <div>
          <h2>Exemplo do Mapa</h2>
          <img
            src={ExemploDeMapaDois}
            className="exemploDeMapa02"
            alt="mapa 2"
          />
        </div>
      </div>

      <Footer />
    </div>
  );
}
