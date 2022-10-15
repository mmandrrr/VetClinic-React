import { blogData } from "../BlogItem/blogData";

const BlogPage = () => {

    const pageId = document.location.pathname.split('/')[2],
            page = blogData[pageId];

    return(
        <>
            <section className="blogPage">
                <div className="blogPage_container">
                    <img src={page.img} alt="" className="blogPage_image" />
                    <div className="blogPage_text-content">
                        <div className="blogPage_title">{page.title}</div>
                        <div className="blogPage_text">{page.fullText}</div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default BlogPage