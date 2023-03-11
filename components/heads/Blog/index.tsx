import IBlog from '../../../types/blog'
import { FC } from 'react'
import Twitter from './Twitter'
import General from './General'
import Article from './Article'
import OpenGraph from './OpenGraph'

interface IProps {
    blog: IBlog
}

const HeadBlog: FC<IProps> = ({ blog }) => {
    return (
        <>
            <Twitter blog={blog}/>
            <General blog={blog}/>
            <Article blog={blog}/>
            <OpenGraph blog={blog}/>
        </>
    )
}

export default HeadBlog