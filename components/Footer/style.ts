import styled from 'styled-components'

export const Container = styled.footer`
    .social {
        display: flex;
        padding: 6% 25%;
        flex-direction: row;
        justify-content: space-evenly;
        background-color: ${props => props.theme.primary};
    }

    .social>.logo {
        width: 7vw;
        height: auto;
    }

    .message {
        display: none;
    }

    .rights {
        padding: 8%;
        display: flex;
        background-color: ${props => props.theme.backgroundColorSecondary};
    }

    .rights>.logo {
        width: 55%;
        height: auto;
        align-self: center;
    }

    .rights>.text {
        margin-top: 8%;
        font-size: 2.8vw;
        font-weight: 600;
        align-self: center;
        color: ${props => props.theme.colorSecondary};
    }

    @media screen and (min-width: 900px) {
        .social {
            padding: 4% 35%;
        }

        .social>.logo {
            width: 3vw;
        }

        .message {
            padding: 4%;
            display: block;
            background-color: ${props => props.theme.backgroundColorSecondary};
        }
        
        .message>h3 {
            font-size: 2.2rem;
            font-weight: bold;
            text-align: center;
            color: ${props => props.theme.colorSecondary};
        }

        .rights {
            display: none;
        }
    }
`