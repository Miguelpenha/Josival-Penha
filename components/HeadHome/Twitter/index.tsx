import Head from 'next/head'
import twitter from './twitter'

function Twitter() {
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