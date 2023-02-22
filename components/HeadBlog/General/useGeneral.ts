import { IGeneral } from '../type'
import { useTheme } from 'styled-components'

function useGeneral(): IGeneral {
    const theme = useTheme()

    const general: IGeneral = {
        robots: 'all',
        rating: 'general',
        fbAdmins: 'josival.penha',
        themeColor: theme.backgroundColor,
        canonical: process.env.NEXT_PUBLIC_DOMAIN,
        copyright: '© 2023 Instituto Educacional Josival Penha',
        author: 'Instituto Educacional Josival Penha - Paulista',
        creator: 'Instituto Educacional Josival Penha - Paulista',
        description: 'Blog do Instituto Educacional Josival Penha',
        publisher: 'Instituto Educacional Josival Penha - Paulista',
        title: 'Blog Instituto Educacional Josival Penha - Escola em Mirueira',
        keywords: 'blog, escola em mirueira, escola em paulista, melhores escolas em paulista, escolar particular em paulista'
    }

    return general
}

export default useGeneral