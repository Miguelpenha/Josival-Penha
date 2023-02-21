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
        copyright: '© 2022 Instituto Educacional Josival Penha',
        author: 'Instituto Educacional Josival Penha - Paulista',
        creator: 'Instituto Educacional Josival Penha - Paulista',
        publisher: 'Instituto Educacional Josival Penha - Paulista',
        title: 'Instituto Educacional Josival Penha - Escola em Mirueira',
        keywords: 'escola em mirueira, escola em paulista, melhores escolas em paulista, escolar particular em paulista',
        description: 'O Instituto Educacional Josival Penha oferece educação de qualidade com valores sólidos e educação cristã. Agende uma visita e confira por que somos uma das melhores escolas em Paulista.'
    }

    return general
}

export default useGeneral