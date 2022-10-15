import { Link } from "react-router-dom"

import NewsItem from "./NewsItem/NewsItem"

import {newsData} from './NewsItem/newsData'

const News = () => {

    const newsList = newsData.map(({id,img,date,title,text}) => {
        return(
            <Link to={`/news/${id}`} style={{textDecoration : 'none'}} key={id}>
                <NewsItem 
                    img = {img}
                    date = {date}
                    title = {title}
                    text = {text}
                />
            </Link>
        )
    })

    return(
        <section className="news">
        <div className="news_container">
            <div className="news_title">
                <h1 className="news_title-text">Новости и акции</h1>
            </div>
            <div className="news_content">
                <ul className="news_list">
                    <li className="news_list-item"><a href="" className="news_list-link">1</a></li>
                    <li className="news_list-item"><a href="" className="news_list-link">2</a></li>
                    <li className="news_list-item"><a href="" className="news_list-link">3</a></li>
                    <li className="news_list-item"><a href="" className="news_list-link">4</a></li>
                </ul>
                <div className="news_content-list">
                    {newsList}
                </div>
            </div>
        </div>
    </section>
    )
}

export default News