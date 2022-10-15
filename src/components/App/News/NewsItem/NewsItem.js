

const NewsItem = ({img,date,title,text}) => {
    return(
        <div className="news_content-list-item">
            <img src={img} alt="" className="news_item-img" />
            <div className="news_item-text-content">
                <div className="news_item-title">{title}</div>
                <div className="news_item-text">
                    <span>{date}</span>
                    {text}   
                </div>
            </div>
        </div>
    )
}

export default NewsItem