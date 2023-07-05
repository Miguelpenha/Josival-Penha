import { ITwitter } from '../../types'

const twitter: ITwitter = {
    card: 'summary_large_image',
    url: process.env.NEXT_PUBLIC_DOMAIN,
    title: 'Instituto Educacional Josival Penha - Sua escola em Mirueira',
    image: `${process.env.NEXT_PUBLIC_DOMAIN}/img/thumbnail.png`,
    description: 'O Instituto Educacional Josival Penha oferece educação de qualidade com valores sólidos e educação cristã. Agende uma visita e confira por que somos uma das melhores escolas em Paulista.'
}

export default twitter