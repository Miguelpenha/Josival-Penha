import { IOpenGraph } from '../type'

const openGraph: IOpenGraph = {
    type: 'school',
    url: process.env.NEXT_PUBLIC_DOMAIN,
    site_name: 'Instituto Educacional Josival Penha',
    title: 'Instituto Educacional Josival Penha - Sua escola em Mirueira',
    image: `${process.env.NEXT_PUBLIC_DOMAIN}/img/photos/Photo-Principal.webp`,
    description: 'O Instituto Educacional Josival Penha oferece educação de qualidade com valores sólidos e educação cristã. Agende uma visita e confira por que somos uma das melhores escolas em Paulista.'
}

export default openGraph