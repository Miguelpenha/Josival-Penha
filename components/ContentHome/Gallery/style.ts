import styled from 'styled-components'
import ImageRaw from 'next/image'

export const Container = styled.section`
    padding: 5%;
    display: flex;
    background-color: ${props => props.theme.backgroundColorSecondary};
`

export const Title = styled.h2`
    width: 90%;
    margin-top: 4%;
    margin-bottom: 10%;
    align-self: center;

    * && {
        font-weight: bold;
        font-size: 1.58rem;
        text-align: center;
        color: ${props => props.theme.backgroundColor};
    }

    @media screen and (min-width: 900px) {
        width: 50%;
        margin-top: 0%;
        margin-bottom: 2%;
    }
`

export const Highlighted = styled.span`
    color: ${props => props.theme.secondary};
`

export const Photos = styled.div`
    gap: 2vw;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    
    @media screen and (min-width: 900px) {
        width: 50%;
        align-self: center;
        grid-template-columns: repeat(3, 1fr);
    }
`

export const Image = styled(ImageRaw)`
    width: 100%;
    padding: 0%;
    height: auto;
    cursor: pointer;
    border-radius: 20px;
    transition-duration: 0.15s;
    transition-timing-function: linear;

    :hover {
        transform: scale(1.05);
        filter: brightness(0.8);
        box-shadow: 0 5px 15px rgb(0 0 0 / 50%);
        animation: floatImage 1s infinite linear;
    }

    @keyframes floatImage {
        50% {
            transform: scale(1);
            box-shadow: 0 5px 15px rgb(0 0 0 / 80%);
        }

        100% {
            transform: scale(1.05);
        }
    }
`