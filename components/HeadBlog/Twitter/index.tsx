import IBlog from '../../../types/blog'
import { FC } from 'react'
import useTwitter from './useTwitter'
import Head from 'next/head'

interface IProps {
    blog: IBlog
}

const Twitter: FC<IProps> = ({ blog }) => {
    const twitter = useTwitter(blog)

    return (
        <Head>
            <meta name="twitter:url" content={twitter.url}/>
            <meta name="twitter:card" content={twitter.card}/>
            <meta name="twitter:image" content={twitter.image}/>
            <meta name="twitter:title" content={twitter.title}/>
            <meta name="twitter:description" content={twitter.description}/>
        </Head>
    )
}

export default Twitter