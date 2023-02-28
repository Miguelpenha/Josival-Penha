import { ContainerSection, FormContainer, Title, Field, Label, Input, ButtonSubmit } from './style'

function Form() {
    return (
        <ContainerSection id="form-contact" className="show">
            <FormContainer id="form" method="post" action={process.env.NEXT_PUBLIC_URL_FORM}>
                <Title>AGENDE <br/>UMA VISITA</Title>
                <input type="text" name="honeypot" style={{ display: 'none' }}/>
                <input type="hidden" name="$site" id="site" value="Josival Penha"/>
                <input type="hidden" name="accessKey" value={process.env.NEXT_PUBLIC_ACCESS_KEY_FORM}/>
                <input type="hidden" name="redirectTo" value={`${process.env.NEXT_PUBLIC_DOMAIN}/#success`}/>
                <Field>
                    <Label htmlFor="name">Nome do responsável</Label>
                    <Input type="text" name="$name" id="name" required/> 
                </Field>
                <Field>
                    <Label htmlFor="tel">Celular (whatsapp)</Label>
                    <Input type="tel" name="$tel" id="tel" required/> 
                </Field>
                <Field>
                    <Label htmlFor="email">E-mail</Label>
                    <Input type="email" name="$email" id="email" required/> 
                </Field>
                <ButtonSubmit type="submit">ENVIAR AGORA</ButtonSubmit>
            </FormContainer>
        </ContainerSection>
    )
}

export default Form