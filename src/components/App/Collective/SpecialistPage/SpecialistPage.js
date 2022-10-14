import { Link } from "react-router-dom";

import ReviewItem from "./ReviewItem/ReviewItem";
import CourseItem from "./CourseItem/CourseItem";

import { specialistsData } from "../Specialists/specialistsData"

import arrow from '../../../../assets/History/right-arrow-forward-svgrepo-com.svg'

const SpecialistPage = () => {

    const userId = document.location.pathname.split('/')[2],
          user   = specialistsData[userId];

    const coursesList = user.courses.map(({year,coursesName,id}) => {
        return(
            <CourseItem 
                key = {id}
                coursesName = {coursesName}
                year = {year}
            />
        )
    })

    const reviewList = user.reviews.map(({profilePhoto,userName,review,id}) => {
        return(
            <ReviewItem 
                key = {id}
                profilePhoto = {profilePhoto}
                userName = {userName}
                review = {review}
                specPhoto = {user.photo}
            />
        )
    })

    return(
        <section className="specialist-page">
            <div className="specialist-page_container">
                <div className="specialist-page_profile">
                    <img src={user.photo} alt="" className="specialist-page_profile-picture" />
                    <div className="specialist-page_profile-date"><span>ближайшая дата приема: 29.11.22</span></div>
                    <div className="specialist-page_interaction">
                        <div className="specialist-page_sign-up">ЗАПИСАТЬСЯ</div>
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
                                <span>{reviewList.length} отзывa</span>
                            </div>
                            <div className="specialist-page_overview-counter">
                                <ul>
                                    <li>1</li>
                                    <li>2</li>
                                    <li>3</li>
                                    <li>4</li>
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