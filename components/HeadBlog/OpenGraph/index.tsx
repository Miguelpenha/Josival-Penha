import IBlog from '../../../types/blog'
import { FC } from 'react'
import useOpenGraph from './useOpenGraph'
import Head from 'next/head'

interface IProps {
    blog: IBlog
}

const OpenGraph: FC<IProps> = ({ blog }) => {
    const openGraph = useOpenGraph(blog)

    return (
        <Head>
            <meta property="og:url" content={openGraph.url}/>
            <meta property="og:type" content={openGraph.type}/>
            <meta property="og:title" content={openGraph.title}/>
            <meta property="og:image" content={openGraph.image}/>
            <meta property="og:locale" content={openGraph.locale}/>
            <meta property="og:site_name" content={openGraph.site_name}/>
            <meta property="og:description" content={openGraph.description}/>
        </Head>
    )
}

export default OpenGraph