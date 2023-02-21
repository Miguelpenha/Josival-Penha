import styled from 'styled-components'

export const Container = styled.footer`
    .social {
        display: flex;
        padding: 6% 25%;
        flex-direction: row;
        background-color: #0094d4;
        justify-content: space-evenly;
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
        background-color: #ED3237;
    }

    .rights>.logo {
        width: 55%;
        height: auto;
        align-self: center;
    }

    .rights>.text {
        margin-top: 8%;
        font-size: 2.8vw;
        color: #FEFEFE;
        font-weight: 600;
        align-self: center;
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
            background-color: #ED3237;
        }
        
        .message>h3 {
            color: #FEFEFE;
            font-size: 2.2rem;
            font-weight: bold;
            text-align: center;
        }

        .rights {
            display: none;
        }
    }
`