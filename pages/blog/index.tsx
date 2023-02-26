import HeadBlogHome from '../../components/HeadBlogHome'
import Header from '../../components/Header'
import { Container, Title, BlogList } from '../../styles/pages/blog'
import blogs from '../../services/blogs'
import BlogComponent from '../../components/Blog'
import Footer from '../../components/Footer'

function BlogHome() {
    return (
        <>
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

export default BlogHome