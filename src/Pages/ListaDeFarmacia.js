import Header from "../Componentes/Header";
import Menu from "../Componentes/Menu";
import Footer from "../Componentes/Footer";
import "./ListaDeFarmacia.css"
import { useState, useEffect } from "react";

export default function ListaDeFarmacia(){

    const [stateFarmacia, setStateFarmacia] = useState([]) 
    const[searchFarmacia, setSearchFarmacia] = useState('')
    const[farmaciaFiltrada, setFarmaciaFiltrada] = useState([])

    useEffect(()=>{
      fetch("http://localhost:3000/farmacias/")
      .then(resposta => resposta.json())
      .then(data =>setStateFarmacia(data))
    },[])

    useEffect(()=>{
      setFarmaciaFiltrada(stateFarmacia.filter(item => item.nomeFantasia.includes(searchFarmacia)))
    },[searchFarmacia, farmaciaFiltrada])




    // fazer função de excluir aqui 

    return(
      <div>
        <Header />
        <Menu />
        <div className="tagCentro">Farmácias Cadastradas</div>
        <div className="divInputsFarmacia" >
        <input 
        className="searchFarmaciaUm" 
        type='text' 
        placeholder="Buscar Farmácia por Nome"
        onChange={e=>setSearchFarmacia(e.target.value)}
        value={searchFarmacia}
        />
        </div>


        <div className="cardsFarmacia">
        {farmaciaFiltrada.map((farma) => (
            <div className="farmacias" key={farma.id}>
              <div className="linha1">Razão Social : {farma.razaoSocial} </div>
              <div className="linha2">  CNPJ : {farma.cnpj}</div>
              <div className="linha3"> Nome Fantasia  : {farma.nomeFantasia}</div>
              <div className="linha4"> Email : {farma.email} </div>
              <div className="linha5"> Telefone Fixo: {farma.telefoneFixo}</div>
              <div className="linha6"> Celular : {farma.celular}</div>
              <div className="linha7"> Cep : {farma.cep}</div>
              <div className="linha8"> Endereço : {farma.endereco}</div>
              <div className="linha9"> Numero : {farma.numero}</div>
              <div className="linha10"> Bairro : {farma.bairro}</div>
              <div className="linha11"> Cidade : {farma.cidade}</div>
              <div className="linha12"> Estado : {farma.estado}</div>
              <div className="linha13"> Latitude : {farma.latitude}  </div>
              <div className="linha14"> Longitue : {farma.longitute} </div>

            </div>
          ))}
          </div>
          <Footer />
      </div>
    )
}