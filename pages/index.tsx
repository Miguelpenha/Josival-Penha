import { useEffect } from 'react'
import reveal from '../components/reveal'
import HeadHome from '../components/HeadHome'
import GoogleTagManager from '../components/GoogleTagManager'
import Header from '../components/Header'
import ContentHome from '../components/ContentHome'
import Footer from '../components/Footer'

function Home() {
    useEffect(() => window.addEventListener('scroll', reveal), [])

    return <>
        <HeadHome/>
        <GoogleTagManager/>
        <Header/>
        <ContentHome/>
        <Footer/>
    </>
}

export default Home