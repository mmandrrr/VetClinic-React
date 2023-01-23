import { blogData } from "../BlogItem/blogData";
import { getPageId } from "../../../../services/getPageId/getPageId";

const BlogPage = () => {

    const pageId = getPageId(2),
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