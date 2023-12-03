import IBlog from '../../types/blog'
import { FC } from 'react'
import { Container, Image, Title, More } from './style'

interface IProps {
    blog: IBlog
}

const Blog: FC<IProps> = ({ blog }) => {
    return (
        <Container href={`blog/${blog.slug}`}>
            <Image placeholder="blur" priority src={blog.image.src} alt={blog.image.alt}/>
            <Title>{blog.title}</Title>
            <More>Ler o post</More>
        </Container>
    )
}

export default Blog