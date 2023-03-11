import IBlog from '../../../../types/blog'
import { IGeneral } from '../../types'
import { useTheme } from 'styled-components'

function useGeneral(blog: IBlog): IGeneral {
    const theme = useTheme()

    const general: IGeneral = {
        rating: 'general',
        title: blog.title,
        robots: 'index follow',
        author: blog.author.name,
        fbAdmins: 'josival.penha',
        description: blog.description,
        themeColor: theme.backgroundColor,
        creator: 'Instituto Educacional Josival Penha',
        publisher: 'Instituto Educacional Josival Penha',
        copyright: '© 2023 Instituto Educacional Josival Penha',
        canonical: `${process.env.NEXT_PUBLIC_DOMAIN}/blog/${blog.slug}`,
        keywords: 'blog, escola em mirueira, escola em paulista, melhores escolas em paulista, escolar particular em paulista'
    }

    return general
}

export default useGeneral