interface ITwitter {
    url: string
    card: string
    title: string
    image: string
    description: string
}

interface IGeneral {
    title: string
    author: string
    rating: string
    robots: string
    creator: string
    keywords: string
    fbAdmins: string
    canonical: string
    publisher: string
    copyright: string
    themeColor: string
    description: string
}

interface IOpenGraph {
    url: string
    type: string
    title: string
    image: string
    locale: string
    site_name: string
    description: string
}

export {
    IGeo,
    ITwitter,
    IGeneral,
    IOpenGraph
}