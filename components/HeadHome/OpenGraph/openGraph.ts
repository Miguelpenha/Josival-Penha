import { IOpenGraph } from '../type'

const openGraph: IOpenGraph = {
    type: 'school',
    url: process.env.NEXT_PUBLIC_DOMAIN,
    site_name: 'Instituto Educacional Josival Penha',
    title: 'Instituto Educacional Josival Penha - Escola em Mirueira',
    image: `${process.env.NEXT_PUBLIC_DOMAIN}/img/Logo-Josival-Penha.png`,
    description: 'O Instituto Educacional Josival Penha está preparado para as aulas em modelo presencial seguindo todos os protocolos recomendados pelo governo estadual'
}

export default openGraph