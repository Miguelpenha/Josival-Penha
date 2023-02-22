import Head from 'next/head'
import geo from './geo'

function Geo() {
    return (
        <Head>
            <meta name="geo.region" content={geo.region}/>
            <meta name="geo.position" content={geo.position}/>
            <meta name="geo.placename" content={geo.placename}/>
        </Head>
    )
}

export default Geo