import Head from 'next/head'
import openGraph from './openGraph'

function OpenGraph() {
    return (
        <Head>
            <meta property="og:url" content={openGraph.url}/>
            <meta property="og:type" content={openGraph.type}/>
            <meta property="og:title" content={openGraph.title}/>
            <meta property="og:image" content={openGraph.image}/>
            <meta property="og:site_name" content={openGraph.site_name}/>
            <meta property="og:description" content={openGraph.description}/>
        </Head>
    )
}

export default OpenGraph