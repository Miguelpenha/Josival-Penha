import { Container, Image, Title, Description, Button } from './style'
import artsBackground from '../../../public/img/Arts Background.svg'

function Opportunity() {
    return (
        <Container>
            <Image src={artsBackground} alt="Fundo com artes"/>
            <Title>EDUCAÇÃO DE VALOR</Title>
            <Description>Não perca a oportunidade de proporcionar ao seu filho experiências e vivências de uma educação inovadora, que visa o desenvolvimento emocional e de alta performance acadêmica.</Description>
            <Button href="https://api.whatsapp.com/send?phone=558141091419">agendar uma visita</Button>
        </Container>
    )
}

export default Opportunity