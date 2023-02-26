import IBlog from '../../../types/blog'
import { IArticle } from '../type'

function useArticle(blog: IBlog): IArticle {
    const dateSplitted = blog.date.split('/')
    const date = new Date(`${dateSplitted[2]}/${dateSplitted[1]}/${dateSplitted[0]}`).toISOString()

    return {
        modifiedTime: date,
        publishedTime: date,
        section: 'educação',
        author: blog.author.name,
        publisher: 'Instituto Educacional Josival Penha'
    }
}

export default useArticle