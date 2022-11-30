import "./CadastroFarmacia.css";
import { useState } from "react";
import Header from '../Componentes/Header'
import Menu from "../Componentes/Menu";
import Footer from "../Componentes/Footer";

const token = "pk.eyJ1IjoiZ2FicmllbC1mZXJyYXoiLCJhIjoiY2w4NTI3b2VvMGw3cjNvbWZwYW5jZXM5bCJ9.BdEOJsh3zyZKNPqojZn8nQ"

export default function CadastroFarmacia() {

  const url = "http://localhost:3000/farmacias/";

  const [razaoSocial, setRazaoSocial] = useState("");
  const [cnpj, setCnpj] = useState("");
  const [nomeFantasia, setNomeFantasia] = useState("");
  const [email, setEmail] = useState("");
  const [telefoneFixo, setTelefoneFixo] = useState("");
  const [celular, setCelular] = useState("");
  const [cep, setCep] = useState("");
  const [endereco, setEndereco] = useState("");
  const [numero, setNumero] = useState("");
  const [bairro, setBairro] = useState("");
  const [cidade, setCidade] = useState("");
  const [estado, setEstado] = useState("");
  const [latitude, setLatitude] = useState("");
  const [longitute, setLongitute] = useState("");

  const adicionandoFarmacia = async (e) => {
    e.preventDefault();

    const addFarmacia = {
    razaoSocial,
    cnpj,
    nomeFantasia,
    email,
    telefoneFixo,
    celular,
    cep,
    endereco,
    numero,
    bairro,
    cidade,
    estado,
    latitude,
    longitute,

    };
    const respos = fetch(url,{
      method: 'POST',
      headers:{
        "Content-Type": "application/json",
    },
    body: JSON.stringify(addFarmacia),
    });

    setRazaoSocial("");
    setCnpj("");
    setNomeFantasia("");
    setEmail("");
    setTelefoneFixo("");
    setCelular("");
    setCep("");
    setEndereco("");
    setNumero("");
    setBairro("");
    setCidade("");
    setEstado("");
    setLatitude("");
    setLongitute("");

  };
  const geradorMapBox = (e) => {
    e.preventDefault();
    
    fetch(
      `https://api.mapbox.com/geocoding/v5/mapbox.places/${endereco}.json?access_token=${token}`
    )
      .then((response) => response.json())
      .then((data) => {
        console.log({data})
        const [longitute, latitude] = data.features[0].center;
        setLatitude(latitude)
        setLongitute(longitute)
      });
}
  return (
    <div>
      <Header />
      <Menu />
      <div className="formularioFarmaciaTotal">
        <div className="tagCentro">Cadastro de Farmácias</div>
        <form className="formularioFarmacia">
          <div className="linha001">
          <label>
            Razão Social - 
            <input
            className="razaoSocial"
              type="text"
              value={razaoSocial}
              name="razaoSocial"
              onChange={(e) => setRazaoSocial(e.target.value)}
            />
          </label>
          <label>
          CNPJ -
            <input
            minLength={14}
            required
            className="cnpj"
              type="text"
              value={cnpj}
              name="cnpj"
              onChange={(e) => setCnpj(e.target.value)}
            />
          </label>
          </div>
          <div className="linha002">
          <label >
          Nome Fantasia - 
            <input
            required
            className="nomeFantasia"
              type="text"
              value={nomeFantasia}
              name="nomeFantasia"
              onChange={(e) => setNomeFantasia(e.target.value)}
            />
          </label>
          <label>
          Email - 
            <input
            required
            className="email"
              type="text"
              value={email}
              name="email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>
          </div>
          <div className="linha003">
          <label>
          Telefone Fixo - 
            <input
            required
            className="telefoneFixo"
              type="number"
              value={telefoneFixo}
              name="telefoneFixo"
              onChange={(e) => setTelefoneFixo(e.target.value)}
            />
          </label>
          <label>
            Celular - 
            <input
            required
            className="celular"
              type="number"
              value={celular}
              name="celular"
              onChange={(e) => setCelular(e.target.value)}
            />
          </label>
          </div>
          <div className="linha004">
    <label>
    CEP - 
            <input
            required
            className="cep"
              type="number"
              value={cep}
              name="cep"
              onChange={(e) => setCep(e.target.value)}
            />
          </label>
          
          <label>
          Endereço - 
            <input
            required
            className="endereco"
              type="text"
              value={endereco}
              name="endereco"
              onChange={(e) => setEndereco(e.target.value)}
            />
          </label>
          </div>
          <div className="linha005">
          <label>
          Numero - 
            <input
            required
            className="numero"
              type="number"
              value={numero}
              name="numero"
              onChange={(e) => setNumero(e.target.value)}
            />
          </label>
          <label>
          Bairro - 
            <input
            required
            className="bairro"
              type="text"
              value={bairro}
              name="bairro"
              onChange={(e) => setBairro(e.target.value)}
            />
          </label>
          </div>
          <div className="linha006">
          <label>
          Cidade - 
            <input
            required
            className="cidade"
              type="text"
              value={cidade}
              name="cidade"
              onChange={(e) => setCidade(e.target.value)}
            />
          </label>
          <label>
          Estado - 
            <input
            required
            className="estado"
              type="text"
              value={estado}
              name="estado"
              onChange={(e) => setEstado(e.target.value)}
            />
          </label>
          </div>
          <div className="linha007">
          <label>
          Latitude - 
            <input
            required
            className="latitude"
              type="number"
              value={latitude}
              name="latitude"
              onChange={(e) => setLatitude(e.target.value)}
            />
          </label>
          <label>
          Longitude - 
            <input
            required
            className="longitude"
              type="number"
              value={longitute}
              name="longitute"
              onChange={(e) => setLongitute(e.target.value)}
            />
          </label>
          </div>
          <div className="divBotoes">
            <div>
          <button type="submit" onClick={adicionandoFarmacia}>Adicionar Farmacia</button>
          </div>
          <div>
          <button onClick={geradorMapBox}>Gerar Latitude e Longitude</button>
          </div>
          </div>
        </form>
        <div className="divInformativaCadastroFarmacia">
          Para gerar a Latitude e a Longitude coloque o Endereço primeiro e depois Aperte o botão Gerar Latitude e Longitude
        </div>
      </div>
      <Footer />
    </div>
  );
}
