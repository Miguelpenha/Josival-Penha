interface IGeo {
    region: string
    position: string
    placename: string
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

export {
    IGeo,
    ITwitter,
    IGeneral,
    IOpenGraph
}