import IBlog from '../../../types/blog'
import { FC } from 'react'
import useGeneral from './useGeneral'
import Head from 'next/head'

interface IProps {
    blog: IBlog
}

const General: FC<IProps> = ({ blog }) => {
    const general = useGeneral(blog)

    return (
        <Head>
            <title>{general.title}</title>
            <meta name="robots" content={general.robots}/>
            <meta name="rating" content={general.rating}/>
            <meta name="author" content={general.author}/>
            <meta name="creator" content={general.creator}/>
            <link rel="canonical" href={general.canonical}/>
            <meta name="keywords" content={general.keywords}/>
            <meta name="publisher" content={general.publisher}/>
            <meta name="copyright" content={general.copyright}/>
            <meta property="fb:admins" content={general.fbAdmins}/>
            <meta name="theme-color" content={general.themeColor}/>
            <meta name="description" content={general.description}/>
        </Head>
    )
}

export default General