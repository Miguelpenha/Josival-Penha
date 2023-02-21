interface IGeo {
    region: string
    position: string
    placename: string
}

interface IIcon {
    icon32: string
    icon48: string
    icon96: string
    icon144: string
    shortcut: string
}

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
    site_name: string
    description: string
}

export {
    IGeo,
    IIcon,
    ITwitter,
    IGeneral,
    IOpenGraph
}