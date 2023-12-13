import IBlog from '../../../../types/blog'
import { ITwitter } from '../../types'

function useTwitter(blog: IBlog): ITwitter {
    return {
        title: blog.title,
        card: 'summary_large_image',
        description: blog.description,
        url: `${process.env.NEXT_PUBLIC_DOMAIN}/blog/${blog.slug}`,
        image: `${process.env.NEXT_PUBLIC_DOMAIN}/img/thumbnail.png`
    }
}

export default useTwitter