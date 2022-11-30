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

    const [nomeMedicamentos, setNomeMedicamentos] = useState("");
    const [precoMedicamentos, setPrecoMedicamentos] = useState("");
    const [dosagemMedicamentos, setDosagemMedicamentos] = useState("");
    const [tipoMedicamentos, setTipoMedicamentos] = useState("");
    const [laboratorioMedicamentos, setLaboratorioMedicamentos] = useState("");
    const [medicamentosControlados, setMedicamentosControlados] = useState("");

    const [medicamento, setMedicamento] = useState(null) 

    useEffect(()=>{
        fetch(url)
        .then(resposta => resposta.json())
        .then(data =>setMedicamento(data))
        setNomeMedicamentos(medicamento?.nomeMedicamentos);
        setPrecoMedicamentos(medicamento?.dosagemMedicamentos);
        setDosagemMedicamentos(medicamento?.nomeMedicamentos);
        setTipoMedicamentos(medicamento?.tipoMedicamentos);
        setLaboratorioMedicamentos(medicamento?.laboratorioMedicamentos);
        setMedicamentosControlados(medicamento?.medicamentosControlados);
    },[])

    const editandoMedicamentos = async (e) => {
        e.preventDefault();

        const addRemedio = {
            nomeMedicamentos: nomeMedicamentos || medicamento?.nomeMedicamentos,
            precoMedicamentos: precoMedicamentos || medicamento?.precoMedicamentos,
            dosagemMedicamentos: dosagemMedicamentos || medicamento?.dosagemMedicamentos,
            tipoMedicamentos: tipoMedicamentos || medicamento?.tipoMedicamentos,
            laboratorioMedicamentos: laboratorioMedicamentos || medicamento?.laboratorioMedicamentos,
            medicamentosControlados: medicamentosControlados || medicamento?.medicamentosControlados,
          };
      
          try {
            const res = await fetch(url, {
              method: "put",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify(addRemedio),
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
      
            alert(`Medicamento ${medicamento?.nomeMedicamentos} editado com sucesso!`);
      
            setNomeMedicamentos("");
            setPrecoMedicamentos("");
            setDosagemMedicamentos("");
            setTipoMedicamentos("");
            setLaboratorioMedicamentos("");
            setMedicamentosControlados("");

            navigate("/lista-medicamentos");
      
          } catch (err) {
            console.log(err.message);
          }
        }

    return (
        medicamento === null ? 'Carregando...' : 
        (
            <div>
            <Header />
            <Menu />
            <div className="formularioTotalMedicamentos">
                <div className="tagCentro">Editar Medicamento</div>
                    <form className="formularioMedicamentos" onSubmit={editandoMedicamentos}>
                    <div  className="linhaMedicamentos01" >
                    <label>
                        Nome do Medicamento - 
                        <input
                        required
                        className="nomeMedicamentos"
                        type="text"
                        value={nomeMedicamentos || medicamento?.nomeMedicamentos || ''}
                        name="remediosNome"
                        onChange={(e) => setNomeMedicamentos(e.target.value)}
                        />
                    </label>
                    <label>
                        Preço - 
                        <input
                        required
                        className="precoMedicamentos"
                        type="text"
                        value={precoMedicamentos || medicamento?.precoMedicamentos || ''}
                        name="remediosPreco"
                        onChange={(e) => setPrecoMedicamentos(e.target.value)}
                        />
                    </label>
                    </div>
                    <div className="linhaMedicamentos02" >
                    <label>
                        Laboratório -
                        <input
                        required
                        className="laboratorioMedicamentos"
                        type="text"
                        value={laboratorioMedicamentos || medicamento?.laboratorioMedicamentos || ''}
                        name="remediosLaboratorio"
                        onChange={(e) => setLaboratorioMedicamentos(e.target.value)}
                        />
                    </label>
                    <label>
                        Dosagem - 
                        <input
                        required
                        className="dosagemMedicamentos"
                        type="number"
                        value={dosagemMedicamentos || medicamento?.dosagemMedicamentos || ''}
                        name="remediosDosagem"
                        onChange={(e) => setDosagemMedicamentos(e.target.value)}
                        />
                    </label>
                    </div>
                    <div className="linhaMedicamentos03" >
                    <label>
                        Tipo - 
                        <input
                        required
                        className="tipoMedicamentos"
                        type="text"
                        value={tipoMedicamentos || medicamento?.tipoMedicamentos || ''}
                        name="remediosTipo"
                        onChange={(e) => setTipoMedicamentos(e.target.value)}
                        />
                    </label>
                    <div>
                        <label>Medicação Controlada </label>
                        <select className="select" value={medicamentosControlados || medicamento?.medicamentosControlados || ''} onChange={(e) => setMedicamentosControlados(e.target.value)}>
                            <option value="">  </option>
                            <option value="Nao">Não</option>
                            <option value="Sim">Sim</option>
                        </select>
                    </div>
                </div>
                
                <div className="botaoMedicamentos">
                <input type="submit" value="Editar Medicamento" />
                </div>
                </form>
            </div>
            <Footer />
            </div>
            ))
    }