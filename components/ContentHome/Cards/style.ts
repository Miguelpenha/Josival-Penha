import styled from 'styled-components'

export const Container = styled.section`
    width: 100%;
    display: none;
    background-color: ${props => props.theme.colorSecondary};

    @media screen and (min-width: 900px) {
        display: none;
    }
`

export const List = styled.ul`
    display: flex;
    list-style: none;
    overflow-x: scroll;
    flex-direction: row;
    scroll-snap-type: x mandatory;

    ::-webkit-scrollbar {
        display: none;
    }
`

export const Card = styled.li`
    margin: 2.5%;
    padding: 1rem;
    min-width: 13.13rem;
    border-radius: 10px;
    scroll-snap-align: center;
    background-color: ${props => props.theme.primary};
`

export const TitleCard = styled.h3`
    font-size: 1.4rem;
    text-align: center;
    color: ${props => props.theme.secondary};
`

export const TextCard = styled.span`
    display: flex;
    margin-top: 10%;
    font-size: 1rem;
    color: ${props => props.theme.colorSecondary};
`