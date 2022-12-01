import { useState, useEffect } from "react";

import { Link } from "react-router-dom";

import BlogItem from "./BlogItem/BlogItem";

import ShowBlog from "./BlogItem/blogData";

const Blog = () => {

    const [blogList, setBlogList] = useState([]);

    const section = new ShowBlog();

    useEffect(() => {
        const newblogList = section.getBlogList(0,BlogItem);
        setBlogList(newblogList)
    },[])

    const updateBlogList = (e) => {
        const id = e.target.id;
        const newList = section.getBlogList(id * 4,BlogItem);
        setBlogList(newList)
    }

    const counter = section.createCounter().map((item,i) => {
                return(
                    <li 
                        onClick={(e) => {
                            updateBlogList(e)
                            }}
                        id={i}
                        key={i} 
                        className='blog_list-item'
                    >{item}</li>
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
                    {counter}
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