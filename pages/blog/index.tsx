import { InferGetServerSidePropsType, GetServerSideProps } from 'next'
import Head from 'next/head'
import HeadBlogHome from '../../components/heads/BlogHome'
import Header from '../../components/Header'
import { Container, Title, BlogList } from '../../styles/pages/blog'
import blogs from '../../services/blogs'
import BlogComponent from '../../components/Blog'
import Footer from '../../components/Footer'

function BlogHome({ isBeta }: InferGetServerSidePropsType<typeof getServerSideProps>) {
    return (
        <>
            <Head>
                {isBeta && <script crossOrigin="anonymous" type="text/javascript" src="https://api.josivalpenha.com/video"/>}
            </Head>
            <HeadBlogHome/>
            <Header page="blog"/>
            <Container>
                <Title>NOVIDADES JOSIVAL PENHA</Title>
                <BlogList>
                    {blogs.map((blog, index) => (
                        <BlogComponent key={index} blog={blog}/>
                    ))}
                </BlogList>
            </Container>
            <Footer/>
        </>
    )
}

interface IQuery {
    beta: 'true' | undefined
}

export const getServerSideProps = (async (ctx) => {
    const { beta } = ctx.query as unknown as IQuery

    return { props: { isBeta: Boolean(beta) } }
}) satisfies GetServerSideProps<{ isBeta: boolean }>

export default BlogHome