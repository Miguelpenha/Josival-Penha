import IBlog from '../../../types/blog'
import { IOpenGraph } from '../type'

function useOpenGraph(blog: IBlog): IOpenGraph {
    return {
        type: 'blog',
        locale: 'pt_BR',
        title: blog.title,
        description: blog.description,
        site_name: 'Instituto Educacional Josival Penha',
        url: `${process.env.NEXT_PUBLIC_DOMAIN}/blog/${blog.slug}`,
        image: `${process.env.NEXT_PUBLIC_DOMAIN}/${blog.image.name}`
    }
}

export default useOpenGraph