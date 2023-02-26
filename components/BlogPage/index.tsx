import IBlog from '../../types/blog'
import { FC } from 'react'
import HeaderDefault from '../../components/Header'
import { Container, Header, PhotoAuthor, TextsHeader, Author, Date, IconShare, Title, Description, Image } from './style'
import Footer from '../../components/Footer'

interface IProps {
    blog: IBlog
    children?: any
}

const BlogPage: FC<IProps> = ({ blog, children }) => {
    async function handleShare() {
        if (blog) {
            await navigator.share({
                title: blog.title,
                text: blog.description,
                url: `${process.env.NEXT_PUBLIC_DOMAIN}/blog/${blog.slug}`
            })
        }
    }

    if (blog) {
        return (
            <>
                <HeaderDefault page="blog"/>
                <Container>
                    <Header>
                        <PhotoAuthor src={blog.author.image.src} alt={blog.author.image.alt}/>
                        <TextsHeader>
                            <Author>{blog.author.name}</Author>
                            <Date>{blog.date}</Date>
                        </TextsHeader>
                        <IconShare onClick={handleShare} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                            <path d="M0 0h24v24H0z" fill="none"/>
                            <path d="M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7c.05-.23.09-.46.09-.7s-.04-.47-.09-.7l7.05-4.11c.54.5 1.25.81 2.04.81 1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3c0 .24.04.47.09.7L8.04 9.81C7.5 9.31 6.79 9 6 9c-1.66 0-3 1.34-3 3s1.34 3 3 3c.79 0 1.5-.31 2.04-.81l7.12 4.16c-.05.21-.08.43-.08.65 0 1.61 1.31 2.92 2.92 2.92 1.61 0 2.92-1.31 2.92-2.92s-1.31-2.92-2.92-2.92z"/>
                        </IconShare>
                    </Header>
                    <Title>{blog.title}</Title>
                    <Description>{blog.description}</Description>
                    <Image src={blog.image.src} alt={blog.image.alt}/>
                    {children}
                </Container>
                <Footer/>
            </>
        )
    } else {
        return null
    }
}

export default BlogPage