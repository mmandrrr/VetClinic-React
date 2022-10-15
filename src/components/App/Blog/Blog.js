import { Link } from "react-router-dom"

import BlogItem from "./BlogItem/BlogItem"

import {blogData} from './BlogItem/blogData'

const Blog = () => {

    const blogList = blogData.map(({id,img,date,title,text}) => {
        return(
            <Link to={`/blog/${id}`} style={{textDecoration : 'none'}} key={id}>
                <BlogItem 
                    img = {img}
                    date = {date}
                    title = {title}
                    text = {text}
                />
            </Link>
        )
    })

    return(
        <section className="blog">
        <div className="blog_container">
            <div className="blog_title">
                <h1 className="blog_title-text">Блог</h1>
                <div className="blog_subtitle">
                    <h2 className="blog_subtitle-item"><Link to='/company-history'>О НАС</Link></h2>
                    <h2 className="blog_subtitle-item"><Link to='/collective'>СПЕЦИАЛИСТЫ</Link></h2>
                </div>
            </div>
            <div className="blog_content">
                <ul className="blog_list">
                    <li className="blog_list-item"><a href="" className="blog_list-link">1</a></li>
                    <li className="blog_list-item"><a href="" className="blog_list-link">2</a></li>
                    <li className="blog_list-item"><a href="" className="blog_list-link">3</a></li>
                    <li className="blog_list-item"><a href="" className="blog_list-link">4</a></li>
                </ul>
                <div className="blog_content-list">
                    {blogList}
                </div>
            </div>
        </div>
    </section>
    )
}

export default Blog