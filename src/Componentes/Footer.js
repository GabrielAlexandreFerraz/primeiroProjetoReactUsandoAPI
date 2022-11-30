import './Footer.css'
import iconeFacebook from '../img/iconeFacebook.png'
import iconeInstagram from '../img/iconeInstagram.png'
import iconeTwitter from '../img/iconeTwitter.png'
import iconeYoutube from '../img/iconeYoutube.png'


export default function Footer(){
    return (
    <footer className='footer'>
        <div className='iconeFacebook'><img src={iconeFacebook}  className='logoFacebook' alt='icone Facebook'/></div>
        <div className='iconeInstagram'><img src={iconeInstagram}  className='logoInstagram' alt='icone Instagram'/></div>
        <div className='iconeTwitter'><img src={iconeTwitter}  className='logoTwitter' alt='icone Twitter'/></div>
        <div className='iconeYouTube'><img src={iconeYoutube}  className='logoYoutube' alt='icone Youtube'/></div>
    </footer>
    )
}