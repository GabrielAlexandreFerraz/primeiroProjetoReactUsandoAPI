import { useState, useEffect } from "react";
import { useParams, useNavigate  } from 'react-router-dom';

import "./CadastroMedicamentos.css";
import Header from '../Componentes/Header'
import Menu from "../Componentes/Menu";
import Footer from "../Componentes/Footer";



export default function CadastroMedicamentos() {

    const navigate = useNavigate();

    const { id } = useParams();
    const url = `http://localhost:3000/medicamentos/${id}`;

    useEffect(()=>{
        const deletandoMedicamento = async (e) => {
          
              try {
                const res = await fetch(url, {
                  method: "delete",
                  headers: {
                    "Content-Type": "application/json",
                  }
                });
          
                if (!res.ok) {
                  const message = `Ocorreu um erro: ${res.status} - ${res.statusText}`;
                  throw new Error(message);
                }
          
                const data = await res.json();
          
                const result = {
                  status: res.status + "-" + res.statusText,
                  data: data,
                };
          
                console.log(result)
          
                alert(`Medicamento deletado com sucesso!`);
    
                navigate("/lista-medicamentos");
          
              } catch (err) {
                console.log(err.message);
              }
            }

            deletandoMedicamento();
    },[])

    return (
        <div>
            <Header />
            <Menu />
            <div className="formularioTotalMedicamentos">
                <div className="tagCentro">Deletando...</div>
            </div>
            <Footer />
        </div>
    )
}