import HeadGeneral from '../components/HeadGeneral'
import Header from '../components/Header'
import { Container, Title, BlogList } from '../styles/pages/blog'
import BlogComponent from '../components/Blog'
import photo1 from '../public/img/blog/Photo 1.png'
import Footer from '../components/Footer'

function Blog() {
    return (
        <>
            <HeadGeneral/>
            <Header page="blog" priorityLogo/>
            <Container>
                <Title>NOVIDADES JOSIVAL PENHA</Title>
                <BlogList>
                    <BlogComponent
                        image={photo1}
                        slug="qual-a-importancia-da-educacao-crista-na-infancia-das-criancas"
                        title="Qual a importância da educação cristã na infância das crianças?"
                    />
                    <BlogComponent
                        image={photo1}
                        slug="qual-a-importancia-da-educacao-crista-na-infancia-das-criancas"
                        title="Qual a importância da educação cristã na infância das crianças?"
                    />
                    <BlogComponent
                        image={photo1}
                        slug="qual-a-importancia-da-educacao-crista-na-infancia-das-criancas"
                        title="Qual a importância da educação cristã na infância das crianças?"
                    />
                    <BlogComponent
                        image={photo1}
                        slug="qual-a-importancia-da-educacao-crista-na-infancia-das-criancas"
                        title="Qual a importância da educação cristã na infância das crianças?"
                    />
                    <BlogComponent
                        image={photo1}
                        slug="qual-a-importancia-da-educacao-crista-na-infancia-das-criancas"
                        title="Qual a importância da educação cristã na infância das crianças?"
                    />
                </BlogList>
            </Container>
            <Footer/>
        </>
    )
}

export default Blog