import { StaticImageData } from 'next/image'
import { FC } from 'react'
import { Container, Image, Title, More } from './style'

interface IProps {
    slug: string
    title: string
    image: StaticImageData
}

const Blog: FC<IProps> = ({ image, title, slug }) => {
    return (
        <Container>
            <Image priority src={image} alt=""/>
            <Title>{title}</Title>
            <More href={slug}>Ler o post</More>
        </Container>
    )
}

export default Blog