import { ITwitter } from '../../types'

const twitter: ITwitter = {
    card: 'summary_large_image',
    url: `${process.env.NEXT_PUBLIC_DOMAIN}/blog`,
    title: 'Blog - Instituto Educacional Josival Penha',
    description: 'Blog do Instituto Educacional Josival Penha',
    image: `${process.env.NEXT_PUBLIC_DOMAIN}/img/photos/Photo-Principal.webp`
}

export default twitter