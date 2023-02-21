import { useEffect } from 'react'
import reveal from '../components/reveal'
import Head from 'next/head'
import Script from 'next/script'

function Home() {
    useEffect(() => window.addEventListener('scroll', reveal), [])

    return <>
        <Head>
            <meta charSet="UTF-8"/>
            <meta http-equiv="X-UA-Compatible" content="IE=edge"/>
            <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
            <title>Instituto Educacional Josival Penha - Escola em Mirueira</title>
            <meta name="language" content="pt-BR"/>
            <link rel="canonical" href={process.env.NEXT_PUBLIC_DOMAIN}/>
            <meta property="og:type" content="school"/>
            <meta property="og:title" content="Instituto Educacional Josival Penha - Escola em Mirueira"/>
            <meta property="og:description" content="O Instituto Educacional Josival Penha está preparado para as aulas em modelo presencial seguindo todos os protocolos recomendados pelo governo estadual"/>
            <meta property="og:image" content={`${process.env.NEXT_PUBLIC_DOMAIN}/img/Logo-Josival-Penha.png`}/>
            <meta property="og:url" content={process.env.NEXT_PUBLIC_DOMAIN}/>
            <meta property="og:site_name" content="Instituto Educacional Josival Penha"/>
            <meta property="fb:admins" content="josival.penha"/>
            <meta name="twitter:card" content="summary"/>
            <meta name="twitter:url" content={process.env.NEXT_PUBLIC_DOMAIN}/>
            <meta name="twitter:title" content="Instituto Educacional Josival Penha - Escola em Mirueira"/>
            <meta name="twitter:description" content="O Instituto Educacional Josival Penha está preparado para as aulas em modelo presencial seguindo todos os protocolos recomendados pelo governo estadual"/>
            <meta name="twitter:image" content={`${process.env.NEXT_PUBLIC_DOMAIN}/img/Logo-Josival-Penha.png"`}/>
            <meta name="author" content="Instituto Educacional Josival Penha - Paulista"/>
            <meta name="creator" content="Instituto Educacional Josival Penha - Paulista"/>
            <meta name="publisher" content="Instituto Educacional Josival Penha - Paulista"/>
            <meta name="description" content="O Instituto Educacional Josival Penha oferece educação de qualidade com valores sólidos e educação cristã. Agende uma visita e confira por que somos uma das melhores escolas em Paulista."/>
            <meta name="copyright" content="© 2022 Instituto Educacional Josival Penha"/>
            <meta name="keywords" content="escola em mirueira, escola em paulista, melhores escolas em paulista, escolar particular em paulista"/>
            <meta name="rating" content="general"/>
            <meta name="robots" content="all"/>
            <meta name="theme-color" content="#ffffff"/>
            <meta name="geo.position" content="-7.9600197; -34.8903871"/>
            <meta name="geo.placename" content="Instituto Educacional Josival Penha"/>
            <meta name="geo.region" content="Brasil Pernambuco"/>
            {/* Favicons */}
            <link rel="shortcut icon" href="img/Favicons/favicon.png" type="image/x-icon"/>
            <link rel="icon" href="img/Favicons/favicon_32.png" sizes="32x32"/>
            <link rel="icon" href="img/Favicons/favicon_48.ico" sizes="48x48"/>
            <link rel="icon" href="img/Favicons/favicon_96.png" sizes="96x96"/>
            <link rel="icon" href="img/Favicons/favicon_144.png" sizes="144x144"/>
        </Head>
        {/* Google Tag Manager */}
        <Script dangerouslySetInnerHTML={{__html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','GTM-TKWBQ2K');`}}/>
        {/* End Google Tag Manager */}
        {/* Google Tag Manager (noscript) */}
        <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-TKWBQ2K"
        height="0" width="0" style={{display: 'none', visibility: 'hidden'}}></iframe></noscript>
        {/* End Google Tag Manager (noscript) */}
        <header>
            <img src="img/Logo Josival Penha.svg" alt="Logo Josival Penha"/>
        </header>
        <main>
            <section className="principal">
                <div className="container-photo">
                    <img className="photo" src="img/photos/Photo-Principal.webp" alt="Foto de alunos do Josival Penha"/>
                    <img className="photo-animation" src="img/Photo-Animation.webp" alt="Animação para a foto dos alunos"/>
                </div>
                <div className="container-description">
                    <span className="label">Seja bem vindo(a) ao Josival Penha, sua escola em Paulista! &#x1F44B;</span>
                    <h1 className="title">O próximo passo do seu filho é com a gente.</h1>
                    <span className="description">Educação de qualidade com o cuidado e carinho que seu pequeno merece.</span>
                    <a href="#form-contact" className="button">
                        AGENDE UMA VISITA
                        <svg xmlns="http://www.w3.org/2000/svg" enableBackground="new 0 0 24 24" viewBox="0 0 24 24">
                            <g>
                                <rect fill="none" height="24" width="24"/>
                            </g>
                            <g>
                                <g>
                                    <polygon points="6.41,6 5,7.41 9.58,12 5,16.59 6.41,18 12.41,12"/>
                                    <polygon points="13,6 11.59,7.41 16.17,12 11.59,16.59 13,18 19,12"/>
                                </g>
                            </g>
                        </svg>
                    </a>
                </div>
            </section>
            <section id="form-contact" className="show">
                <form id="form" action={process.env.NEXT_PUBLIC_URL_FORM} method="post">
                    <h2 className="title">AGENDE <br/>UMA VISITA</h2>
                    <input type="hidden" name="redirectTo" value={`${process.env.NEXT_PUBLIC_DOMAIN}/#success`}/>
                    <input type="text" name="honeypot" style={{display: 'none'}}/>
                    <input type="hidden" name="$site" id="site" value="Josival Penha"/>
                    <input type="hidden" name="accessKey" value={process.env.NEXT_PUBLIC_ACCESS_KEY_FORM}/>
                    <div className="field">
                        <label htmlFor="name">Nome do responsável</label>
                        <input type="text" name="$name" id="name" required/> 
                    </div>
                    <div className="field">
                        <label htmlFor="tel">Celular (whatsapp)</label>
                        <input type="tel" name="$tel" id="tel" required/> 
                    </div>
                    <div className="field">
                        <label htmlFor="email">E-mail</label>
                        <input type="email" name="$email" id="email" required/> 
                    </div>
                    <button className="button" type="submit">ENVIAR AGORA</button>
                </form>
            </section>
            <section className="objective">
                <a href="https://api.whatsapp.com/send?phone=558141091419" className="button-whatsapp">
                    <img src="img/icons/whatsapp.svg" alt="Ícone do whatsApp"/>
                    <span>FALE AGORA PELO 
                        WHATSAPP</span>
                </a>
                <img className="photo" src="img/photos/Photo-Main.png" alt="Fundo de ondas"/>
                <img className="background" src="img/Waves Background.svg" alt="Fundo de ondas"/>
                <div className="container-description">
                    <h2 className="title">Educação completa para o seu filho.</h2>
                    <span className="description">
                        <span className="highlighted">Com educação de qualidade, valores sólidos e a nossa parceria</span>, seu filho será preparado para ser a melhor versão de si mesmo.
                        <br/>
                        <br/>
                        Essa é a crença que compartilhamos com as milhares de famílias que dividem com o <span className="highlighted">Josival Penha</span> a formação de seus filhos.
                    </span>
                </div>
            </section>
            <section className="objectives">
                <div className="container-objetives">
                    <div className="objetive">
                        <div className="container-photo show">
                            <img className="photo show" src="img/photos/Photo-1.png" alt="Foto de alunos do Josival Penha"/>
                            <svg className="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                <path d="M0 0h24v24H0V0z" fill="none"/>
                                <path d="M16.5 3c-1.74 0-3.41.81-4.5 2.09C10.91 3.81 9.24 3 7.5 3 4.42 3 2 5.42 2 8.5c0 3.78 3.4 6.86 8.55 11.54L12 21.35l1.45-1.32C18.6 15.36 22 12.28 22 8.5 22 5.42 19.58 3 16.5 3zm-4.4 15.55l-.1.1-.1-.1C7.14 14.24 4 11.39 4 8.5 4 6.5 5.5 5 7.5 5c1.54 0 3.04.99 3.57 2.36h1.87C13.46 5.99 14.96 5 16.5 5c2 0 3.5 1.5 3.5 3.5 0 2.89-3.14 5.74-7.9 10.05z"/>
                            </svg>
                            <svg className="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                <path d="M0 0h24v24H0V0z" fill="none"/>
                                <path d="M16.5 3c-1.74 0-3.41.81-4.5 2.09C10.91 3.81 9.24 3 7.5 3 4.42 3 2 5.42 2 8.5c0 3.78 3.4 6.86 8.55 11.54L12 21.35l1.45-1.32C18.6 15.36 22 12.28 22 8.5 22 5.42 19.58 3 16.5 3zm-4.4 15.55l-.1.1-.1-.1C7.14 14.24 4 11.39 4 8.5 4 6.5 5.5 5 7.5 5c1.54 0 3.04.99 3.57 2.36h1.87C13.46 5.99 14.96 5 16.5 5c2 0 3.5 1.5 3.5 3.5 0 2.89-3.14 5.74-7.9 10.05z"/>
                            </svg>
                            <svg className="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                <path d="M0 0h24v24H0V0z" fill="none"/>
                                <path d="M16.5 3c-1.74 0-3.41.81-4.5 2.09C10.91 3.81 9.24 3 7.5 3 4.42 3 2 5.42 2 8.5c0 3.78 3.4 6.86 8.55 11.54L12 21.35l1.45-1.32C18.6 15.36 22 12.28 22 8.5 22 5.42 19.58 3 16.5 3zm-4.4 15.55l-.1.1-.1-.1C7.14 14.24 4 11.39 4 8.5 4 6.5 5.5 5 7.5 5c1.54 0 3.04.99 3.57 2.36h1.87C13.46 5.99 14.96 5 16.5 5c2 0 3.5 1.5 3.5 3.5 0 2.89-3.14 5.74-7.9 10.05z"/>
                            </svg>
                            <svg className="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                <path d="M0 0h24v24H0V0z" fill="none"/>
                                <path d="M16.5 3c-1.74 0-3.41.81-4.5 2.09C10.91 3.81 9.24 3 7.5 3 4.42 3 2 5.42 2 8.5c0 3.78 3.4 6.86 8.55 11.54L12 21.35l1.45-1.32C18.6 15.36 22 12.28 22 8.5 22 5.42 19.58 3 16.5 3zm-4.4 15.55l-.1.1-.1-.1C7.14 14.24 4 11.39 4 8.5 4 6.5 5.5 5 7.5 5c1.54 0 3.04.99 3.57 2.36h1.87C13.46 5.99 14.96 5 16.5 5c2 0 3.5 1.5 3.5 3.5 0 2.89-3.14 5.74-7.9 10.05z"/>
                            </svg>
                            <svg className="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                <path d="M0 0h24v24H0V0z" fill="none"/>
                                <path d="M16.5 3c-1.74 0-3.41.81-4.5 2.09C10.91 3.81 9.24 3 7.5 3 4.42 3 2 5.42 2 8.5c0 3.78 3.4 6.86 8.55 11.54L12 21.35l1.45-1.32C18.6 15.36 22 12.28 22 8.5 22 5.42 19.58 3 16.5 3zm-4.4 15.55l-.1.1-.1-.1C7.14 14.24 4 11.39 4 8.5 4 6.5 5.5 5 7.5 5c1.54 0 3.04.99 3.57 2.36h1.87C13.46 5.99 14.96 5 16.5 5c2 0 3.5 1.5 3.5 3.5 0 2.89-3.14 5.74-7.9 10.05z"/>
                            </svg>
                        </div>
                        <div className="texts">
                            <div className="highlighted">
                                <div className="texts">
                                    <span className="text">educação</span>
                                    <span className="text">infantil</span>
                                </div>
                                <svg className="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                    <path d="M0 0h24v24H0V0z" fill="none"/>
                                    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
                                </svg>
                            </div>
                            <div className="description">
                                Um espaço para brincar e aprender, 
                                <span className="highlighted">para conviver e criar, para se conhecer 
                                    e descobrir o mundo ao seu redor.</span>
                                <br/>
                                <br/>
                                <span className="highlighted">É o momento mais importante do  desenvolvimento das crianças.</span> Aqui, elas começarão a construir todas as bases para serem bem-sucedidas nos anos seguintes.
                            </div>
                        </div>
                    </div>
                    <div className="objetive">
                        <div className="container-photo show">
                            <img className="photo show" src="img/photos/Photo-2.png" alt="Foto de alunos do Josival Penha"/>
                            <svg className="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                <path d="M0 0h24v24H0V0z" fill="none"/>
                                <path d="M22 9.24l-7.19-.62L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27 18.18 21l-1.63-7.03L22 9.24zM12 15.4l-3.76 2.27 1-4.28-3.32-2.88 4.38-.38L12 6.1l1.71 4.04 4.38.38-3.32 2.88 1 4.28L12 15.4z"/>
                            </svg>
                            <svg className="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                <path d="M0 0h24v24H0V0z" fill="none"/>
                                <path d="M22 9.24l-7.19-.62L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27 18.18 21l-1.63-7.03L22 9.24zM12 15.4l-3.76 2.27 1-4.28-3.32-2.88 4.38-.38L12 6.1l1.71 4.04 4.38.38-3.32 2.88 1 4.28L12 15.4z"/>
                            </svg>
                            <svg className="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                <path d="M0 0h24v24H0V0z" fill="none"/>
                                <path d="M22 9.24l-7.19-.62L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27 18.18 21l-1.63-7.03L22 9.24zM12 15.4l-3.76 2.27 1-4.28-3.32-2.88 4.38-.38L12 6.1l1.71 4.04 4.38.38-3.32 2.88 1 4.28L12 15.4z"/>
                            </svg>
                            <svg className="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                <path d="M0 0h24v24H0V0z" fill="none"/>
                                <path d="M22 9.24l-7.19-.62L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27 18.18 21l-1.63-7.03L22 9.24zM12 15.4l-3.76 2.27 1-4.28-3.32-2.88 4.38-.38L12 6.1l1.71 4.04 4.38.38-3.32 2.88 1 4.28L12 15.4z"/>
                            </svg>
                            <svg className="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                <path d="M0 0h24v24H0V0z" fill="none"/>
                                <path d="M22 9.24l-7.19-.62L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27 18.18 21l-1.63-7.03L22 9.24zM12 15.4l-3.76 2.27 1-4.28-3.32-2.88 4.38-.38L12 6.1l1.71 4.04 4.38.38-3.32 2.88 1 4.28L12 15.4z"/>
                            </svg>
                        </div>
                        <div className="texts">
                            <div className="highlighted">
                                <div className="texts">
                                    <span className="text">ensino</span>
                                    <span className="text">fundamental</span>
                                </div>
                                <svg className="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                    <path d="M0 0h24v24H0z" fill="none"/>
                                    <path d="M18 2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM6 4h5v8l-2.5-1.5L6 12V4z"/>
                                </svg>
                            </div>
                            <div className="description">
                                A chegada ao Ensino Fundamental marca o aprimoramento da <span className="highlighted">formação de valores com base na ética, no senso coletivo e nos princípios cristãos.</span>
                            </div>
                        </div>
                    </div>
                </div>
                <a href="https://api.whatsapp.com/send?phone=558141091419" className="button">quero conhecer</a>
            </section>
            <section className="cards">
                <ul className="list">
                    <li className="card">
                        <h3 className="title">Lorem ipsum dolor</h3>
                        <span className="text">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia consectetur voluptas asperiores cum placeat tempora animi nihil, rem atque! Optio a aliquam odit magni, hic eius perferendis alias veniam dolor?</span>
                    </li>
                    <li className="card">
                        <h3 className="title">Lorem ipsum dolor</h3>
                        <span className="text">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia consectetur voluptas asperiores cum placeat tempora animi nihil, rem atque! Optio a aliquam odit magni, hic eius perferendis alias veniam dolor?</span>
                    </li>
                    <li className="card">
                        <h3 className="title">Lorem ipsum dolor</h3>
                        <span className="text">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia consectetur voluptas asperiores cum placeat tempora animi nihil, rem atque! Optio a aliquam odit magni, hic eius perferendis alias veniam dolor?</span>
                    </li>
                    <li className="card">
                        <h3 className="title">Lorem ipsum dolor</h3>
                        <span className="text">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia consectetur voluptas asperiores cum placeat tempora animi nihil, rem atque! Optio a aliquam odit magni, hic eius perferendis alias veniam dolor?</span>
                    </li>
                    <li className="card">
                        <h3 className="title">Lorem ipsum dolor</h3>
                        <span className="text">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia consectetur voluptas asperiores cum placeat tempora animi nihil, rem atque! Optio a aliquam odit magni, hic eius perferendis alias veniam dolor?</span>
                    </li>
                    <li className="card">
                        <h3 className="title">Lorem ipsum dolor</h3>
                        <span className="text">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia consectetur voluptas asperiores cum placeat tempora animi nihil, rem atque! Optio a aliquam odit magni, hic eius perferendis alias veniam dolor?</span>
                    </li>
                    <li className="card">
                        <h3 className="title">Lorem ipsum dolor</h3>
                        <span className="text">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia consectetur voluptas asperiores cum placeat tempora animi nihil, rem atque! Optio a aliquam odit magni, hic eius perferendis alias veniam dolor?</span>
                    </li>
                    <li className="card">
                        <h3 className="title">Lorem ipsum dolor</h3>
                        <span className="text">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia consectetur voluptas asperiores cum placeat tempora animi nihil, rem atque! Optio a aliquam odit magni, hic eius perferendis alias veniam dolor?</span>
                    </li>
                </ul>
            </section>
            <section className="gallery">
                <h2 className="title">FORMAÇÃO INTELECTUAL E HUMANA EM VIVÊNCIAS QUE <span className="highlighted">SÓ NOSSOS ALUNOS CONHECEM</span></h2>
                <div className="photos">
                    <img className="show" src="img/photos/Photo-3.jpg" alt="Foto de alunos do Josival Penha"/>
                    <img className="show" src="img/photos/Photo-4.jpg" alt="Foto de alunos do Josival Penha"/>
                    <img className="show" src="img/photos/Photo-5.jpg" alt="Foto de alunos do Josival Penha"/>
                    <img className="show" src="img/photos/Photo-6.jpg" alt="Foto de alunos do Josival Penha"/>
                    <img className="show" src="img/photos/Photo-7.jpg" alt="Foto de alunos do Josival Penha"/>
                    <img className="show" src="img/photos/Photo-8.jpg" alt="Foto de alunos do Josival Penha"/>
                </div>
            </section>
            <section className="opportunity">
                <img src="img/Arts Background.svg" alt="Fundo com artes"/>
                <h2 className="title">EDUCAÇÃO DE VALOR</h2>
                <span className="description">Não perca a oportunidade de proporcionar ao seu filho experiências e vivências de uma educação inovadora, que visa o desenvolvimento emocional e de alta performance acadêmica.</span>
                <a href="https://api.whatsapp.com/send?phone=558141091419" className="button">agendar uma visita</a>
            </section>
            <div className="mapouter"><div className="gmap_canvas"><iframe title="Google Maps" width="100%" height="400vh" id="gmap_canvas" src="https://maps.google.com/maps?q=Instituto%20Educacional%20Josival%20Penha&t=&z=16&ie=UTF8&iwloc=&output=embed"></iframe></div></div>
        </main>
        <footer>
            <div className="social">
                <img className="logo" src="img/icons/Facebook-logo.svg" alt="Logo Facebook"/>
                <img className="logo" src="img/icons/Instagram-logo.svg" alt="Logo Instagram"/>
                <img className="logo" src="img/icons/Youtube-logo.svg" alt="Logo Youtube"/>
            </div>
            <div className="message">
                <h3>O CUIDADO E CARINHO QUE SEU FILHO MERECE</h3>
            </div>
            <div className="rights">
                <img className="logo" src="img/Logo Josival Penha.svg" alt="Logo Josival Penha"/>
                <h3 className="text">2022 © Todos os direitos reservados</h3>
            </div>
        </footer>
    </>
}

export default Home