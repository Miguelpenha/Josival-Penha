import styled, { css } from 'styled-components'
import Image from 'next/image'
import Link from 'next/link'

export const Container = styled.header`
    display: flex;
    padding: 3.8%;
    flex-direction: column;
    background-color: ${props => props.theme.primary};

    @media screen and (min-width: 900px) {
        padding: 2% 7.5%;
        flex-direction: row;
    }
`

export const Logo = styled(Image)`
    width: 65%;
    height: auto;
    margin-top: auto;
    margin-bottom: auto;

    @media screen and (min-width: 900px) {
        width: 11.7%;
        align-self: flex-start;
    }
`

export const NavBar = styled.nav`
    display: none;
    margin-right: 17%;
    margin-left: auto;
    flex-direction: row;

    @media screen and (min-width: 900px) {
        display: flex;
    }
`

interface IOption {
    select?: boolean
}

export const Option = styled(Link)<IOption>`
    margin: 0% 8%;
    padding: 5% 0%;
    align-self: center;
    white-space: nowrap;
    text-decoration: none;
    transition-duration: 0.2s;
    transition-timing-function: linear;
    color: ${props => props.theme.backgroundColor};
    border-bottom: 2px solid ${props => props.select ? props.theme.backgroundColor : 'transparent'};

    ${props => props.select && css`
        font-weight: bold;
    `}

    :hover {
        border-bottom: 2px solid ${props => props.theme.backgroundColor};
    }
`