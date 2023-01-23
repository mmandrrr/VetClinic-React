import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

import ReviewItem from "./ReviewItem/ReviewItem";
import CourseItem from "./CourseItem/CourseItem";

import { specialistsData } from "../Specialists/specialistsData";
import { scrollToElementWithoutPrevent } from "../../../../services/scrollToElement/scrollToElement";
import { getPageId } from "../../../../services/getPageId/getPageId";
import getSpecialistReview from "../../../../services/getSpecialistReview/getSpecialistReview";

import arrow from '../../../../assets/History/right-arrow-forward-svgrepo-com.svg'


const SpecialistPage = () => {

    const userId = getPageId(2),
          user   = specialistsData[userId],
          reviews = new getSpecialistReview();
    
    const [reviewList, setReviewList] = useState([]);
    const [list, setList] = useState([]);

    const updateReviews = (key) => {
        const newList = reviews.showSection(key,ReviewItem,userId);
        setReviewList(newList)
    }

    useEffect(() => {
        updateReviews(0)
    },[])

    useEffect(() => {
        const newList = reviews.createList(userId);
        setList(newList);
    },[])

    const changeReviewCounter = (e) => {
        const i = +e.target.id;
        updateReviews(i * 4);
    }

    const coursesList = user.courses.map(({year,coursesName,id}) => {
        return(
            <CourseItem 
                key = {id}
                coursesName = {coursesName}
                year = {year}
            />
        )
    })  

    const vieverList = list.map((item,i) => {
        return(
            <li
                onClick={(e) => {
                    changeReviewCounter(e);
                }}
                key={i}
                id = {i}
            >{item + 1}</li>
        )
    })

    return(
        <section className="specialist-page">
            <div className="specialist-page_container">
                <div className="specialist-page_profile">
                    <img src={user.photo} alt="" className="specialist-page_profile-picture" />
                    <div className="specialist-page_profile-date"><span>ближайшая дата приема: 29.11.22</span></div>
                    <div className="specialist-page_interaction">
                        <Link 
                            to='/appointment' 
                            className="specialist-page_sign-up"
                            onClick={() => {scrollToElementWithoutPrevent(document.querySelector('.header'))}}>ЗАПИСАТЬСЯ</Link>
                        <div className="specialist-page_write-overview">ОСТАВИТЬ ОТЗЫВ</div>
                    </div>
                </div>
                <div className="specialist-page_information">
                    <Link to='/collective' className="comp-story_back"><img src={arrow} alt="Back" /> НАЗАД</Link> 
                    <div className="specialist-page_general-info">
                        <div className="specialist-page_name">{user.name} <span>стаж {user.experience}</span></div>
                        <div className="specialist-page_specialization">{user.specialization}</div>
                        <div className="specialist-page_information-text">{user.description}</div>
                        <div className="specialist-page_courses">
                            Пройденные курсы
                            <div className="specialist-page_corses-list">
                                {coursesList}
                            </div>
                        </div>
                    </div>
                    <div className="specialist-page_overview">
                        <div className="specialist-page_overview-header">
                            <div className="specialist-page_overview-title">
                                Отзывы
                                <span>{user.reviews.length} отзывa</span>
                            </div>
                            <div className="specialist-page_overview-counter">
                                <ul>
                                    {vieverList}
                                </ul>
                            </div>
                        </div>
                        <div className="specialist-page_overview-list">
                            {reviewList}
                        </div>
                    </div>
                </div>
            </div>
    </section>
    )
}

export default SpecialistPage