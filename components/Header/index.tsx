import { Container, Logo, NavBar, Option } from './style'
import logoJP from '../../public/img/Logo Josival Penha.svg'

function Header() {
    return (
        <Container>
            <Logo src={logoJP} alt="Logo Josival Penha"/>
            <NavBar>
                <Option href="/" select>Início</Option>
                <Option href="/">Blog</Option>
                <Option href="/" target="_blank" rel="external nofollow noreferrer">Portal</Option>
                <Option href="https://www.granderecife.pe.gov.br/carteira-de-estudante/" target="_blank" rel="external nofollow">Carteira de Estudante</Option>
            </NavBar>
        </Container>
    )
}

export default Header