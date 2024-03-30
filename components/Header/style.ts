import styled, { css } from 'styled-components'
import Link from 'next/link'
import Image from 'next/image'

export const Container = styled.header`
    opacity: 0;
    display: flex;
    padding: 3.8%;
    flex-direction: column;
    transform: translateY(-70%);
    background-color: ${props => props.theme.primary};

    @media screen and (min-width: 900px) {
        padding: 2% 7.5%;
        flex-direction: row;
    }
`

export const ContainerLogo = styled(Link)`
    width: 65%;
    display: flex;
    align-self: center;

    @media screen and (min-width: 900px) {
        width: 15%;
        margin: auto;
        margin-left: 0%;
        align-self: flex-start;
    }
`

export const Logo = styled(Image)`
    width: 100%;
    height: auto;
`

export const NavBar = styled.nav`
    display: flex;
    margin-right: 25%;
    margin-left: auto;
    flex-direction: row;

    @media screen and (max-width: 900px) {
        width: 100%;
        margin-top: 4%;
    }
`

export const ListOptions = styled.ul`
    width: 100%;
    display: flex;
    align-self: center;
    flex-direction: row;

    ::-webkit-scrollbar {
        width: 0px;
    }

    ::-webkit-scrollbar-track {
        background: transparent;
    }

    ::-webkit-scrollbar-thumb {
        background-color: transparent;
    }

    @media screen and (max-width: 900px) {
        overflow: auto;
        scroll-snap-type: x mandatory;
        justify-content: space-between;
        scrollbar-color: transparent transparent;
    }
`

export const ContainerOption = styled.li`
    margin: auto;
    margin: 0% 8%;
    display: flex;
    list-style: none;
    align-self: center;

    @media screen and (max-width: 900px) {
        margin: 5% 5%;
    }
`

interface IOption {
    select?: string
}

export const Option = styled(Link)<IOption>`
    padding: 4%;
    font-size: 1.1em;
    white-space: nowrap;
    text-decoration: none;
    transition-duration: 0.2s;
    transition-timing-function: linear;
    color: ${props => props.theme.backgroundColor};
    border-bottom: 2px solid ${props => props.select === 'true' ? props.theme.backgroundColor : 'transparent'};

    ${props => props.select === 'true' && css`
        font-weight: bold;
    `}

    :hover {
        border-bottom: 2px solid ${props => props.theme.backgroundColor};
    }

    @media screen and (max-width: 900px) {
        padding: 0% 0%;
        font-size: 1.5em;
    }
`