import { IOpenGraph } from '../../types'

const openGraph: IOpenGraph = {
    type: 'blog',
    locale: 'pt_BR',
    url: `${process.env.NEXT_PUBLIC_DOMAIN}/blog`,
    site_name: 'Instituto Educacional Josival Penha',
    title: 'Blog - Instituto Educacional Josival Penha',
    description: 'Blog do Instituto Educacional Josival Penha',
    image: `${process.env.NEXT_PUBLIC_DOMAIN}/img/thumbnail.png`
}

export default openGraph