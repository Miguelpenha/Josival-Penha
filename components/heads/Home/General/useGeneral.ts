import { IGeneral } from '../../types'
import { useTheme } from 'styled-components'

function useGeneral(): IGeneral {
    const theme = useTheme()

    const general: IGeneral = {
        rating: 'general',
        robots: 'index follow',
        fbAdmins: 'josival.penha',
        themeColor: theme.backgroundColor,
        canonical: process.env.NEXT_PUBLIC_DOMAIN,
        author: 'Instituto Educacional Josival Penha',
        creator: 'Instituto Educacional Josival Penha',
        publisher: 'Instituto Educacional Josival Penha',
        copyright: '© 2023 Instituto Educacional Josival Penha',
        title: 'Instituto Educacional Josival Penha - Sua escola em Mirueira',
        keywords: 'escola em mirueira, escola em paulista, melhores escolas em paulista, escolar particular em paulista',
        description: 'O Instituto Educacional Josival Penha oferece educação de qualidade com valores sólidos e educação cristã. Agende uma visita e confira por que somos uma das melhores escolas em Paulista.'
    }

    return general
}

export default useGeneral