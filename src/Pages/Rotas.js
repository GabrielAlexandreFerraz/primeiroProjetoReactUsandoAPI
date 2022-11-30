import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import ListaDeFarmacia from "./ListaDeFarmacia";
import Login from "./Login";
import CadastroFarmacia from "./CadastroFarmacia";
import CadastroMedicamentos from "./CadastroMedicamentos";
import Home from "./Home";
import ListaDeMedicamentos from "./ListaDeMedicamentos";
import EditarMedicamento from "./EditarMedicamento";
import DeletarMedicamento from "./DeletarMedicamento";
import Mapa from "./Mapa";
import NaoEncontrada from "./NaoEncontrada";
import RotaPrivado from "./RotaPrivado";


export default function Rotas() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        {/* <Route path="/login" element={<Navigate replace to="/" /> } /> */}

        <Route element={<RotaPrivado/>}>
          <Route path="/cadastro-farmacia" element={<CadastroFarmacia />} />
          <Route
            path="/cadastro-medicamentos"
            element={<CadastroMedicamentos />}
          />
          <Route path="/lista-farmacia" element={<ListaDeFarmacia />} />
          <Route path="/lista-medicamentos" element={<ListaDeMedicamentos />} />
          <Route path="/editar-medicamento/:id" element={<EditarMedicamento />} />
          <Route path="/deletar-medicamento/:id" element={<DeletarMedicamento />} />
          <Route path="/home" element={<Home />} />
          <Route path="/mapa" element={<Mapa />} />
        </Route>

        <Route path="*" element={<NaoEncontrada />} />
      </Routes>
    </BrowserRouter>
  );
}
