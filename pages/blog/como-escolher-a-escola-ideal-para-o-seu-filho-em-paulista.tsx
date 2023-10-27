import blogs from '../../services/blogs'
import HeadBlog from '../../components/heads/Blog'
import BlogPage from '../../components/BlogPage'
import { Text, SubTitle } from '../../styles/pages/blog/blog'

function Blog() {
    const blog = blogs[0]

    return (
        <>
            <HeadBlog blog={blog}/>
            <BlogPage blog={blog}>
                <Text>Toda mãe quer o melhor para seus filhos, principalmente quando se trata de educação. A escolha de uma escola de qualidade em Paulista pode parecer difícil, mas com algumas dicas e orientações, é possível encontrar o lugar ideal para o seu pequeno.</Text>
                <SubTitle>Conheça a proposta pedagógica da escola</SubTitle>
                <Text>O primeiro passo é conhecer a proposta pedagógica da escola e ver se ela se alinha com os valores e crenças da sua família. Verifique também se a escola oferece um ambiente seguro e acolhedor, com profissionais capacitados e comprometidos em proporcionar uma educação completa, que valoriza tanto o aprendizado quanto o desenvolvimento emocional e social dos alunos.</Text>
                <SubTitle>Relação entre escola, pais e alunos</SubTitle>
                <Text>Observe a relação entre a escola, os pais e os alunos. Uma escola que estimula a participação dos pais e oferece um canal de comunicação efetivo pode garantir uma parceria mais saudável e colaborativa entre família e instituição de ensino.</Text>
                <SubTitle>Reputação da escola</SubTitle>
                <Text>Considere a reputação da escola e as experiências de outros pais e alunos. Converse com pessoas que já tiveram experiências na escola e busque avaliações online.</Text>
                <Text>Lembre-se que escolher a escola certa para o seu filho é uma decisão importante, que pode impactar na formação dele como indivíduo. Por isso, invista um tempo para pesquisar e escolher com calma.</Text>
                <Text>Se você está procurando uma escola em Mirueira que ofereça um ambiente acolhedor, com profissionais capacitados e valores sólidos, o Instituto Educacional Josival Penha é a escolha certa. Aqui, seu filho encontrará uma educação completa, que valoriza tanto o aprendizado quanto o desenvolvimento emocional e social. Com uma equipe dedicada e comprometida em proporcionar o melhor para cada aluno, o Josival Penha é mais que uma escola, é uma família que acolhe e cuida de cada um dos seus pequenos.</Text>
                <Text>Esperamos ter ajudado você a escolher a melhor escola para o seu filho em Paulista! E se quiser conhecer mais sobre o Instituto Educacional Josival Penha, entre em contato conosco pelo WhatsApp: <a href='https://api.whatsapp.com/send?phone=558194997501'>(81) 99499-7501</a>. Será um prazer receber você e sua família em nossa escola.</Text>
            </BlogPage>
        </>
    )
}

export default Blog