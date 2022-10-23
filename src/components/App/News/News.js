import { Link } from "react-router-dom";

import NewsItem from "./NewsItem/NewsItem";

import ShowNews from "./NewsItem/newsData";
import { useState } from "react";
import { useEffect } from "react";

const News = () => {
    const [newsList, setNewList] = useState([]);

    const section = new ShowNews();

    useEffect(() => {
        const newNewsList = section.getNewsList(0,NewsItem);
        setNewList(newNewsList)
    },[])

    const updateNewsList = (e) => {
        const id = e.target.id;
        const newList = section.getNewsList(id * 4,NewsItem);
        setNewList(newList)
    }

    const counter = section.createCounter().map((item,i) => {
                return(
                    <li 
                        onClick={(e) => updateNewsList(e)}
                        id={i}
                        key={i} 
                        className="news_list-item"
                    >{item}</li>
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
                    {counter}
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