import { FC } from 'react'
import useAnimation from './useAnimation'
import { Container, ContainerLogo, Logo, NavBar, ListOptions, ContainerOption, Option } from './style'
import logoJP from '../../public/img/Logo Josival Penha.svg'

interface IProps {
    page: 'home' | 'blog'
    priorityLogo?: boolean
}

const Header: FC<IProps> = ({ priorityLogo, page }) => {
    useAnimation()
    
    return (
        <Container id="header">
            <ContainerLogo href="/">
                <Logo priority={priorityLogo} src={logoJP} alt="Logo Josival Penha"/>
            </ContainerLogo>
            <NavBar>
                <ListOptions>
                    <ContainerOption>
                        <Option href="/" select={page === 'home' ? 'true' : 'false'}>Início</Option>
                    </ContainerOption>
                    <ContainerOption>
                        <Option href="/blog" select={page === 'blog' ? 'true' : 'false'}>Blog</Option>
                    </ContainerOption>
                    <ContainerOption>
                        <Option href="https://www.granderecife.pe.gov.br/servicos/carteira-de-identificacao-estudantil/" target="_blank" rel="external nofollow">Carteira de Estudante</Option>
                    </ContainerOption>
                </ListOptions>
            </NavBar>
        </Container>
    )
}

export default Header