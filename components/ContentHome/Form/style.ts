import styled from 'styled-components'

export const ContainerSection = styled.section`
    display: none;

    @media screen and (min-width: 900px) {
        top: 80%;
        width: 35%;
        right: 10%;
        display: flex;
        padding-top: 12%;
        position: absolute;
    }
`

export const FormContainer = styled.form`
    width: 80%;
    padding: 5%;
    display: flex;
    align-self: center;
    margin-bottom: 10%;
    border-radius: 20px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    background-color: ${props => props.theme.primary};
`

export const Title = styled.h2`
    width: 85%;
    margin-top: 5%;
    font-weight: 800;
    font-size: 2.2rem;
    margin-bottom: 8%;
    text-align: center;
    align-self: center;
    color: ${props => props.theme.colorSecondary};
`

export const Field = styled.div`
    display: flex;
    margin-top: 5%;
`

export const Label = styled.label`
    font-weight: bold;
    margin-bottom: 2%;
    font-size: 1.03rem;
    color: ${props => props.theme.backgroundColor};
`

export const Input = styled.input`
    padding: 4%;
    border: none;
    font-weight: bold;
    font-size: 1.12rem;
    color: ${props => props.theme.primary};

    :focus {
        outline: none;
    }
`

export const ButtonSubmit = styled.button`
    border: none;
    display: flex;
    padding: 6% 5%;
    margin-top: 10%;
    cursor: pointer;
    font-weight: bold;
    font-size: 1.61rem;
    border-radius: 20px;
    align-items: center;
    transition-duration: 0.1s;
    transition-timing-function: linear;
    color: ${props => props.theme.colorSecondary};
    background-color: ${props => props.theme.secondary};

    :hover {
        filter: brightness(0.9);
    }
`