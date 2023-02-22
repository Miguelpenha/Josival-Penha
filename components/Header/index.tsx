import { FC } from 'react'
import { Container, Logo, NavBar, Option } from './style'
import logoJP from '../../public/img/Logo Josival Penha.svg'

interface IProps {
    page: 'home' | 'blog'
    priorityLogo?: boolean
}

const Header: FC<IProps> = ({ priorityLogo, page }) => {
    return (
        <Container>
            <Logo priority={priorityLogo} src={logoJP} alt="Logo Josival Penha"/>
            <NavBar>
                <Option href="/" select={page === 'home' ? 'true' : 'false'}>Início</Option>
                <Option href="/blog" select={page === 'blog' ? 'true' : 'false'}>Blog</Option>
                <Option href="/" target="_blank" rel="external nofollow noreferrer">Portal</Option>
                <Option href="https://www.granderecife.pe.gov.br/carteira-de-estudante/" target="_blank" rel="external nofollow">Carteira de Estudante</Option>
            </NavBar>
        </Container>
    )
}

export default Header