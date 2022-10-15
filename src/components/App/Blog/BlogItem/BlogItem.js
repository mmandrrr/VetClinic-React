

const BlogItem = ({img,date,title,text}) => {
    return(
        <div className="blog_content-list-item">
            <img src={img} alt="" className="blog_item-img" />
            <div className="blog_item-text-content">
                <div className="blog_item-title">{title}</div>
                <div className="blog_item-text">
                    <span>{date}</span>
                    {text}   
                </div>
            </div>
        </div>
    )
}

export default BlogItem