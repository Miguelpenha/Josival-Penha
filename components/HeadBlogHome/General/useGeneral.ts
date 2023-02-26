import { IGeneral } from '../type'
import { useTheme } from 'styled-components'

function useGeneral(): IGeneral {
    const theme = useTheme()

    const general: IGeneral = {
        rating: 'general',
        robots: 'index follow',
        fbAdmins: 'josival.penha',
        themeColor: theme.backgroundColor,
        author: 'Instituto Educacional Josival Penha',
        creator: 'Instituto Educacional Josival Penha',
        publisher: 'Instituto Educacional Josival Penha',
        canonical: `${process.env.NEXT_PUBLIC_DOMAIN}/blog`,
        title: 'Blog - Instituto Educacional Josival Penha',
        copyright: '© 2023 Instituto Educacional Josival Penha',
        description: 'Blog do Instituto Educacional Josival Penha',
        keywords: 'blog, escola em mirueira, escola em paulista, melhores escolas em paulista, escolar particular em paulista'
    }

    return general
}

export default useGeneral