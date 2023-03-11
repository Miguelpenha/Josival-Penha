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

export {
    IGeo,
    IIcon
}