import './Header.css'
import Logo from '../img/logo.png'

export default function Header(){
    return(
        <header>
            <div> context aqui </div>
            <img src={Logo}  className='logoPharm' alt='Logo'/>
            
        </header>   
    )
}