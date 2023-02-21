import Head from 'next/head'
import Geo from './Geo'
import Icon from './Icon'
import Twitter from './Twitter'
import General from './General'
import OpenGraph from './OpenGraph'

function HeadHome() {
    return (
        <>
            <Geo/>
            <Icon/>
            <Twitter/>
            <General/>
            <OpenGraph/>
            <Head>
                <meta charSet="UTF-8"/>
                <meta name="language" content="pt-BR"/>
                <meta httpEquiv="X-UA-Compatible" content="IE=edge"/>
                <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
            </Head>
        </>
    )
}

export default HeadHome