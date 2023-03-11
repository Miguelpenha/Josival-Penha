import IBlog from '../../../../types/blog'
import { FC } from 'react'
import useArticle from './useArticle'
import Head from 'next/head'

interface IProps {
    blog: IBlog
}

const Article: FC<IProps> = ({ blog }) => {
    const article = useArticle(blog)

    return (
        <Head>
            <meta property="article:author" content={article.author}/>
            <meta property="article:section" content={article.section}/>
            <meta property="article:modified_time" content={article.modifiedTime}/>
            <meta property="article:published_time" content={article.publishedTime}/>
        </Head>
    )
}

export default Article