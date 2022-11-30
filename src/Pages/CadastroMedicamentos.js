import "./CadastroMedicamentos.css";
import { useState } from "react";
import Header from '../Componentes/Header'
import Menu from "../Componentes/Menu";
import Footer from "../Componentes/Footer";

export default function CadastroMedicamentos() {

  const url = "http://localhost:3000/medicamentos/";

  const [nomeMedicamentos, setNomeMedicamentos] = useState("");
  const [precoMedicamentos, setPrecoMedicamentos] = useState("");
  const [dosagemMedicamentos, setDosagemMedicamentos] = useState("");
  const [tipoMedicamentos, setTipoMedicamentos] = useState("");
  const [laboratorioMedicamentos, setLaboratorioMedicamentos] = useState("");
  const [medicamentosControlados, setMedicamentosControlados] = useState("");

  const adicionandoMedicamentos = async (e) => {
      e.preventDefault();
    const addRemedio = {
      nomeMedicamentos,
      precoMedicamentos,
      dosagemMedicamentos,
      tipoMedicamentos,
      laboratorioMedicamentos,
      medicamentosControlados,
    };

    try {
      const res = await fetch(url, {
        method: "post",
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

      alert(`Medicamento ${nomeMedicamentos} cadastrado com sucesso!`);

      setNomeMedicamentos("");
      setPrecoMedicamentos("");
      setDosagemMedicamentos("");
      setTipoMedicamentos("");
      setLaboratorioMedicamentos("");
      setMedicamentosControlados("");

    } catch (err) {
      console.log(err.message);
    }
  }

  return (
    <div>
      <Header />
      <Menu />
      <div className="formularioTotalMedicamentos">
      <div className="tagCentro">Cadastro de Medicamentos</div>
        <form className="formularioMedicamentos" onSubmit={adicionandoMedicamentos}>
          <div  className="linhaMedicamentos01" >
          <label>
            Nome do Medicamento - 
            <input
            required
            className="nomeMedicamentos"
              type="text"
              value={nomeMedicamentos}
              name="remediosNome"
              onChange={(e) => setNomeMedicamentos(e.target.value)}
            />
          </label>
          <label>
            Preço - 
            <input
            required
            className="precoMedicamentos"
              type="number"
              value={precoMedicamentos}
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
              value={laboratorioMedicamentos}
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
              value={dosagemMedicamentos}
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
              value={tipoMedicamentos}
              name="remediosTipo"
              onChange={(e) => setTipoMedicamentos(e.target.value)}
            />
          </label>
          <div>
          <label>Medicação Controlada </label>
            <select className="select" value={medicamentosControlados} onChange={(e) => setMedicamentosControlados(e.target.value)}>
            <option value="">  </option>
              <option value="Nao">Não</option>
              <option value="Sim">Sim</option>
            </select>
            </div>
          </div>
          
          <div className="botaoMedicamentos">
          <input type="submit" value="Adicionar Medicamento" />
          </div>
        </form>
      </div>
      <Footer />
    </div>
  );
}
