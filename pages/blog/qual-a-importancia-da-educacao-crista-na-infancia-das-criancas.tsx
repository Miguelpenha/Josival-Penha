import HeadBlog from '../../components/heads/Blog'
import BlogPage from '../../components/BlogPage'
import blogs from '../../services/blogs'
import { Text } from '../../styles/pages/blog/blog'

function Blog() {
    const blog = blogs[0]
    
    return (
        <>
            <HeadBlog blog={blog}/>
            <BlogPage blog={blog}>
                <Text>Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizado desde o século XVI, quando um impressor desconhecido pegou uma bandeja de tipos e os embaralhou para fazer um livro de modelos de tipos. Lorem Ipsum sobreviveu não só a cinco séculos, como também ao salto para a editoração eletrônica, permanecendo essencialmente inalterado. Se popularizou na década de 60, quando a Letraset lançou decalques contendo passagens de Lorem Ipsum, e mais recentemente quando passou a ser integrado a softwares de editoração eletrônica como Aldus PageMaker.</Text>
            </BlogPage>
        </>
    )
}

export default Blog