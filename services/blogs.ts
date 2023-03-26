import IBlog from '../types/blog'
import photoBlog1 from '../public/img/blog/Photo 1.png'
import photoAuthor1 from '../public/img/blog/Authors/Author 1.jpg'

const blogs: IBlog[] = [
    {
        date: '26/03/2023',
        slug: 'como-escolher-a-escola-ideal-para-o-seu-filho-em-paulista',
        title: 'Como escolher a escola ideal para o seu filho em Paulista?',
        description: 'Dicas e orientações para garantir uma educação completa e acolhedora.',
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