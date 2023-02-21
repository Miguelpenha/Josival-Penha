import Head from 'next/head'
import icon from './icon'

function Icon() {
    return (
        <Head>
            <link rel="icon" href={icon.icon32} sizes="32x32"/>
            <link rel="icon" href={icon.icon48} sizes="48x48"/>
            <link rel="icon" href={icon.icon96} sizes="96x96"/>
            <link rel="icon" href={icon.icon144} sizes="144x144"/>
            <link rel="shortcut icon" href={icon.shortcut} type="image/x-icon"/>
        </Head>
    )
}

export default Icon