import { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup   } from 'react-leaflet'
import Footer from "../Componentes/Footer";
import Header from "../Componentes/Header";
import Menu from "../Componentes/Menu";

export default function Mapa() {
  const [farmas, setFarmas] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/farmacias/")
      .then((resposta) => resposta.json())
      .then((dados) => setFarmas(dados));
  }, []);
  return (
    <div>
      <Header />
      <Menu />
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', margin: '20px'}}>
      <h1 style={{color:'#2280c9'}}>Mapa das Farmácias Cadastradas</h1>
      <MapContainer
        center={[-26.907328, -48.689081]}
        zoom={8}
        scrollWheelZoom={true}
        style={{ height: "500px", width: "500px" }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {farmas.map((farma) => (
          <Marker position={[farma.latitude, farma.longitute]}>
            <Popup>
              <h3> Razão Social : {farma.nomeFantasia}</h3>
              <p>CNPJ: {farma.cnpj}</p>
              <p>Endereço : {farma.endereco}</p>
              <p>Email : {farma.email}</p>
              <p>Telefone Fixo : {farma.telefoneFixo}</p>
              <p>Celular : {farma.celular} <a href={"https://wa.me/"+ (farma.celular)}> Link para WhatsApp</a></p>
              <p>Cep : {farma.cep}</p>
              <p>Endereço : {farma.endereco}</p>
              <p>Número : {farma.numero}</p>
              <p>Bairro : {farma.bairro}</p>
              <p>Cidade : {farma.cidade}</p>
              <p>Estado : {farma.estado}</p>
              <p>Latitude : {farma.latitude}</p>
              <p>Longitude : {farma.longitute}</p>


            </Popup>
          </Marker>
        ))}

      </MapContainer>
      
    </div>
    <Footer />
    </div>

  )
}
