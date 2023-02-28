import styled from 'styled-components'
import ImageRaw from 'next/image'

export const Container = styled.section`
    display: flex;

    @media screen and (min-width: 900px) {
        display: none;
    }
`

export const Image = styled(ImageRaw)`
    width: 100%;
    z-index: -1;
    height: auto;
    position: absolute;
    background-color: ${props => props.theme.colorSecondary};
`

export const Title = styled.h2`
    margin-top: 16%;
    font-weight: 900;
    font-size: 7.1vw;
    align-self: center;
    color: ${props => props.theme.primary};
`

export const Description = styled.span`
    width: 85%;
    margin-top: 5%;
    font-size: 4.2vw;
    font-weight: 600;
    text-align: center;
    align-self: center;
    color: ${props => props.theme.color};
`

export const Button = styled.a`
    width: 80%;
    padding: 5%;
    display: flex;
    font-size: 5vw;
    margin-top: 10%;
    cursor: pointer;
    margin-bottom: 5%;
    font-weight: bold;
    align-self: center;
    border-radius: 20px;
    align-items: center;
    text-decoration: none;
    transition-duration: 0.1s;
    transition-timing-function: linear;
    color: ${props => props.theme.colorSecondary};
    background-color: ${props => props.theme.backgroundColorSecondary};

    :hover {
        filter: brightness(0.9);
    }
`