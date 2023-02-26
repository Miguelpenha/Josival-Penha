import IBlog from '../types/blog'
import photoBlog1 from '../public/img/blog/Photo 1.png'
import photoAuthor1 from '../public/img/blog/Authors/Author 1.jpg'

const blogs: IBlog[] = [
    {
        date: '26/02/2023',
        slug: 'qual-a-importancia-da-educacao-crista-na-infancia-das-criancas',
        title: 'Qual a importância da educação cristã na infância das crianças?',
        description: 'Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica',
        image: {
            src: photoBlog1,
            name: 'img/blog/Photo 1.png',
            alt: 'Foto dos alunos Josival Penha'
        },
        author: {
            name: 'Norma Cristina',
            image: {
                src: photoAuthor1,
                alt: 'Foto de Norma Cristina'
            }
        }
    }
]

export default blogs