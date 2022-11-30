import{ Link } from 'react-router-dom'
import "./Menu.css"


export default function Menu (){
    return(
     <div className="menuTotal">
        <div className="home"><Link to='/home' style={{ textDecoration: 'none' }}>Home</Link></div>
       <div className="cadastroFarmacia"><Link to='/cadastro-farmacia' style={{ textDecoration: 'none' }}>Cadastro de Farmácia</Link></div>
       <div className="farmaciaCadastradaBotao"> <Link to='/lista-farmacia' style={{ textDecoration: 'none' }}>Farmácias Cadastradas</Link></div>
        <div className="cadastroMedicamentos"><Link to='/cadastro-medicamentos' style={{ textDecoration: 'none' }}>Cadastro de Medicamentos</Link></div>
        <div className="medicamentos"><Link to='/lista-medicamentos' style={{ textDecoration: 'none' }}>Medicamentos Cadastrados</Link></div>
        <div className="mapas"><Link to='/mapa' style={{ textDecoration: 'none' }}>Mapas de Farmácia</Link></div>
     </div>
       )
}