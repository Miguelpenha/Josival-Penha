import styled from 'styled-components'
import ImageRaw from 'next/image'

export const Container = styled.article`
    width: 80%;
    margin: auto;
    display: flex;
    margin-bottom: 8em;

    a {
        color: ${props => props.theme.primary};
        text-decoration: underline ${props => props.theme.primary};
    }
`

export const Header = styled.header`
    display: flex;
    margin-top: 4em;
    flex-direction: row;
`

export const PhotoAuthor = styled(ImageRaw)`
    width: 4em;
    height: auto;
    margin-right: 1em;
    border-radius: 50%;
    align-self: center;
`

export const TextsHeader = styled.div`
    display: flex;
`

export const Author = styled.span`
    font-size: 1.5em;
    font-weight: bold;
`

export const Date = styled.span`
    font-size: 1.4em;
`

export const IconShare = styled.svg`
    width: 3em;
    padding: 0.4em;
    cursor: pointer;
    margin-left: auto;
    align-self: center;
    border-radius: 25%;
    transition-duration: 0.1s;
    transition-timing-function: linear;

    :hover {
        border-radius: 50%;
        background-color: ${props => props.theme.tertiary};
    }
`

export const Title = styled.h1`
    margin-top: 1em;
    font-size: 2.5em;
`

export const Description = styled.span`
    margin-top: 1em;
    font-size: 1.5em;
`

export const Image = styled(ImageRaw)`
    width: 100%;
    height: auto;
    margin-top: 2em;
    margin-bottom: 1em;
    align-self: center;
    border-radius: 10px;
`