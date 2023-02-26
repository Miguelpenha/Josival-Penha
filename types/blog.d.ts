import { StaticImageData } from 'next/image'

interface IBlog {
    date: string
    slug: string
    title: string
    description: string
    image: {
        alt: string
        name: string
        src: StaticImageData
    }
    author: {
        name: string
        image: {
            alt: string
            src: StaticImageData
        }
    }
}

export default IBlog