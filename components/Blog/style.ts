import styled from 'styled-components'
import Link from 'next/link'
import ImageRaw from 'next/image'

export const Container = styled(Link)`
    width: 17em;
    margin-bottom: 2em;
    align-self: center;
    text-decoration: none;

    @media screen and (min-width: 900px) {
        margin-left: 2em;
        margin-right: 2em;
    }
`

export const Image = styled(ImageRaw)`
    width: 100%;
    height: auto;
`

export const Title = styled.h2`
    font-size: 1.4em;
    font-weight: 600;
    margin-top: 0.5em;
`

export const More = styled(Link)`
    display: flex;
    margin-top: 1em;
    width: fit-content;
    text-decoration: none;
`