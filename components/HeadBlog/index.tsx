import IBlog from '../../types/blog'
import { FC } from 'react'
import Geo from './Geo'
import Twitter from './Twitter'
import General from './General'
import OpenGraph from './OpenGraph'

interface IProps {
    blog: IBlog
}

const HeadBlog: FC<IProps> = ({ blog }) => {
    return (
        <>
            <Geo/>
            <Twitter blog={blog}/>
            <General blog={blog}/>
            <OpenGraph blog={blog}/>
        </>
    )
}

export default HeadBlog