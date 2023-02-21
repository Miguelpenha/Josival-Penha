import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        flex-direction: column;
        scroll-behavior: smooth;
        font-family: 'Raleway', sans-serif;
        color: ${props => props.theme.color};
        scrollbar-color: ${props => props.theme.primary} ${props => props.theme.secondary};
    }

    *::-webkit-scrollbar {
        width: 12px;
    }

    *::-webkit-scrollbar-track {
        background: ${props => props.theme.secondary};
    }

    *::-webkit-scrollbar-thumb {
        border-radius: 16px;
        background-color: ${props => props.theme.primary};
    }

    *::selection {
        background-color: ${props => props.theme.primary};
    }

    .show {
        opacity: 0.1;
        position: relative;
        transition: 1s all ease;
        transform: translateY(150px);
    }

    .show.active {
        opacity: 1;
        transform: translateY(0);
    }

    body {
        display: flex;
        background-color: ${props => props.theme.backgroundColor};
    }
`