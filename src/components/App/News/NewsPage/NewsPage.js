import { newsData } from "../NewsItem/newsData";

const NewsPage = () => {

    const pageId = document.location.pathname.split('/')[2],
            page = newsData[pageId];

    return(
        <>
            <section className="newsPage">
                <div className="newsPage_container">
                    <img src={page.img} alt="" className="newsPage_image" />
                    <div className="newsPage_text-content">
                        <div className="newsPage_title">{page.title}</div>
                        <div className="newsPage_text">{page.fullText}</div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default NewsPage