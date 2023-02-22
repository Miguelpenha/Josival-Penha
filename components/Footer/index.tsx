import { Container } from './style'
import Image from 'next/image'
import logoFacebook from '../../public/img/icons/Facebook-logo.svg'
import logoInstagram from '../../public/img/icons/Instagram-logo.svg'
import logoYoutube from '../../public/img/icons/Youtube-logo.svg'
import logoJP from '../../public/img/Logo Josival Penha.svg'

function Footer() {
    return (
        <Container>
            <div className="social">
                <Image src={logoFacebook} className="logo" alt="Logo Facebook"/>
                <Image src={logoInstagram} className="logo" alt="Logo Instagram"/>
                <Image src={logoYoutube} className="logo" alt="Logo Youtube"/>
            </div>
            <div className="message">
                <h3>O CUIDADO E CARINHO QUE SEU FILHO MERECE</h3>
            </div>
            <div className="rights">
                <Image src={logoJP} className="logo" alt="Logo Josival Penha"/>
                <h3 className="text">2023 © Todos os direitos reservados</h3>
            </div>
        </Container>
    )
}

export default Footer