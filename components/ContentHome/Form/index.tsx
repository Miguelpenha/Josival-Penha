import { ContainerSection, FormContainer, Title, Field, Label, Input, ButtonSubmit } from './style'

function Form() {
    return (
        <ContainerSection id="form-contact" className="show">
            <FormContainer id="form" action="/success">
                <Title>AGENDE <br/>UMA VISITA</Title>
                <Field>
                    <Label htmlFor="name">Nome do responsável</Label>
                    <Input type="text" name="name" id="name" required/> 
                </Field>
                <Field>
                    <Label htmlFor="tel">Celular (whatsapp)</Label>
                    <Input type="tel" name="telephone" id="telephone" required/> 
                </Field>
                <Field>
                    <Label htmlFor="email">E-mail</Label>
                    <Input type="email" name="email" id="email" required/> 
                </Field>
                <ButtonSubmit type="submit">ENVIAR AGORA</ButtonSubmit>
            </FormContainer>
        </ContainerSection>
    )
}

export default Form