import { Container, Title, Highlighted, Photos, Image } from './style'
import images from './images'

function Gallery() {
    return (
        <Container>
            <Title>FORMAÇÃO INTELECTUAL E HUMANA EM VIVÊNCIAS QUE <Highlighted>SÓ NOSSOS ALUNOS CONHECEM</Highlighted></Title>
            <Photos>
                {images.map((image, index) => (
                    <Image key={index} src={image} className="show" alt="Foto de alunos do Josival Penha"/>
                ))}
            </Photos>
        </Container>
    )
}

export default Gallery