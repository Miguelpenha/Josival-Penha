import { InferGetServerSidePropsType, GetServerSideProps } from 'next'
import { useEffect } from 'react'
import reveal from '../components/reveal'
import Head from 'next/head'
import HeadHome from '../components/heads/Home'
import GoogleTagManager from '../components/GoogleTagManager'
import Header from '../components/Header'
import ContentHome from '../components/ContentHome'
import Footer from '../components/Footer'

function Home({ isBeta }: InferGetServerSidePropsType<typeof getServerSideProps>) {
    useEffect(() => window.addEventListener('scroll', reveal), [])

    return <>
        <Head>
            {isBeta && <script crossOrigin="anonymous" type="text/javascript" src="https://api.josivalpenha.com/nyxel/video"/>}
        </Head>
        <HeadHome/>
        <GoogleTagManager/>
        <Header page="home"/>
        <ContentHome/>
        <Footer/>
    </>
}

interface IQuery {
    beta: 'true' | undefined
}

export const getServerSideProps = (async (ctx) => {
    const { beta } = ctx.query as unknown as IQuery

    return { props: { isBeta: Boolean(beta) } }
}) satisfies GetServerSideProps<{ isBeta: boolean }>

export default Home