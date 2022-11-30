import { useState, useEffect } from "react";
import{ Link } from 'react-router-dom'

import Header from "../Componentes/Header";
import Menu from "../Componentes/Menu";
import Footer from "../Componentes/Footer";
import "./ListaDeMedicamentos.css"



export default function ListaDeMedicamentos(){


    const [medica, setMedica] = useState([]) 
    const[search, setSearch] = useState('')
    const[filtrado, setFiltrado] = useState([])

    useEffect(()=>{
      fetch("http://localhost:3000/medicamentos/")
      .then(resposta => resposta.json())
      .then(data =>setMedica(data))
    },[])

    useEffect(()=>{
      setFiltrado(medica?.filter(item => item.nomeMedicamentos?.includes(search)))
    },[search, filtrado])


    return(
      <div>
        <Header />
        <Menu />
        <div className="tagCentro">Medicamentos Cadastrados </div>
        <div className="divInputsMedicamentos" >
        <input 
        className="searchMedicamentosUm" 
        type='text' 
        placeholder="Buscar Medicamento por Nome"
        onChange={e=>setSearch(e.target.value)}
        value={search}
        />
        </div>

<div className="cards">
        {filtrado.map((remedio) => (
            <div className="produto" key={remedio.id}>
              <div className="linhaUm"><div>Nome : {remedio.nomeMedicamentos}</div> <div> Laboratório : {remedio.laboratorioMedicamentos} </div></div>
              <div className="linhaDois"> <div> Dosagem : {remedio.dosagemMedicamentos}</div> <div>Medicação controlada : {remedio.medicamentosControlados} </div></div>
              <div className="linhaTres"><div> Tipo : {remedio.tipoMedicamentos}</div> <div> Preço : {remedio.precoMedicamentos} </div></div>
              <div className="linha">
                <div className="editar">
                  <Link to={`/editar-medicamento/${remedio.id}`} style={{ textDecoration: 'none' }}>Editar</Link>
                </div>
                <div className="excluir">
                <Link to={`/deletar-medicamento/${remedio.id}`} style={{ textDecoration: 'none' }}>Excluir</Link>
                </div>
              </div>
            </div>
          ))}
          </div>

        
            <Footer />

      </div>
    )
}

