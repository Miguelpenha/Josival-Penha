import styled from 'styled-components'

export const Container = styled.main`
    width: 90%;
    margin: auto;
    display: flex;
    margin-bottom: 8em;
`

export const Title = styled.h1`
    font-size: 2em;
    font-weight: 600;
    margin-top: 1.5em;
    align-self: center;
    text-align: center;
    color: ${props => props.theme.primary};

    @media screen and (min-width: 900px) {
        font-size: 2.4em;
        align-self: flex-start;
    }
`

export const BlogList = styled.section`
    display: flex;
    margin-top: 4em;
    flex-wrap: wrap;

    @media screen and (min-width: 900px) {
        flex-direction: row;
    }
`