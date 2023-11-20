import { Container } from './style'
import Image from 'next/image'
import photoMain from '../../public/img/photos/Photo-Principal.webp'
import photoAnimation from '../../public/img/Photo-Animation.webp'
import Form from './Form'
import iconWhatsapp from '../../public/img/icons/whatsapp.svg'
import photoObjectiveMain from '../../public/img/photos/Photo-Main.png'
import wavesBackground from '../../public/img/Waves Background.svg'
import photo1 from '../../public/img/photos/Photo-1.png'
import photo2 from '../../public/img/photos/Photo-2.png'
import Cards from './Cards'
import Gallery from './Gallery'
import Opportunity from './Opportunity'

function ContentHome() {
    return (
        <Container>
            <section className="principal">
                <div className="container-photo">
                    <Image priority src={photoMain} className="photo" alt="Foto de alunos do Josival Penha"/>
                    <Image priority src={photoAnimation} className="photo-animation" alt="Animação para a foto dos alunos"/>
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
            <Form/>
            <section className="objective">
                <div className='container'>
                    <a href="https://api.whatsapp.com/send?phone=558194997501" className="button-whatsapp">
                        <Image src={iconWhatsapp} alt="Ícone do whatsApp"/>
                        <span>FALE AGORA PELO 
                            WHATSAPP</span>
                    </a>
                </div>
                <Image src={photoObjectiveMain} className="photo" alt="Foto principal"/>
                <Image src={wavesBackground} className="background" alt="Fundo de ondas"/>
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
                            <Image src={photo1} className="photo show" alt="Foto de alunos do Josival Penha"/>
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
                            <Image src={photo2} className="photo show" alt="Foto de alunos do Josival Penha"/>
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
                <a href="https://api.whatsapp.com/send?phone=558194997501" className="button">quero conhecer</a>
            </section>
            <Cards/>
            <Gallery/>
            <Opportunity/>
            <div className="mapouter"><div className="gmap_canvas"><iframe title="Google Maps" width="100%" height="400vh" id="gmap_canvas" src="https://maps.google.com/maps?q=Instituto%20Educacional%20Josival%20Penha&t=&z=16&ie=UTF8&iwloc=&output=embed"></iframe></div></div>
        </Container>
    )
}

export default ContentHome