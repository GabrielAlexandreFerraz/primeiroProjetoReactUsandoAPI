import Header from '../Componentes/Header'
import Menu from '../Componentes/Menu'
import{ Link } from 'react-router-dom'
import './NaoEncontrada.css'
import Footer from "../Componentes/Footer";

export default function NaoEncontrada(){
    return(
        <div>
         <Header />
        <Menu />
        <div className="error404"> 
            <div className="linha404" >404</div>
            <div className="errorError" >Error</div>
            <div className="paginaNaoEncontrada"> Pagina Não Encontrada</div>
            <div className="porfavorClik" ><Link to='home'>Clique aqui para voltar a Pagina ao Home</Link></div>
        
        </div>
        <Footer />
        </div>
    )
}