import { Link } from 'react-router-dom';

import arrowRight from '../../../../../assets/History/right-arrow-forward-svgrepo-com.svg';

const Content = () => {
    const scrollToTop = (e,element) => {
        e.preventDefault()
        element.scrollIntoView(true)
    }

    return(
        <div className="history_content">
            <div className="history_content-title history_title">История компании</div>
            <div className="history_content-text">История компании начинается 14 января 1999 года, когда было образовано ООО «Чижи». Идея пришла, т.к. у основателя компании Прозор Жанны Георгиевны была собака боксёр по кличке Бард…</div>
            <div className="history_read-more">
                <Link 
                    onClick={(e) => scrollToTop(e,document.querySelector('.header'))}
                    to='company-history'
                    >ЧИТАТЬ ДАЛЕЕ <img src={arrowRight} alt="Read More"/></Link>
            </div>
        </div>
    )
}

export default Content