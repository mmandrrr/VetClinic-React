import { Link } from 'react-router-dom';

import arrowRight from '../../../../../assets/History/right-arrow-forward-svgrepo-com.svg';
import specialist from '../../../../../assets/History/specialist.png';

import { scrollToElementWithoutPrevent } from '../../../../../services/scrollToElement/scrollToElement';

import {specialistsData} from '../../../Collective/Specialists/specialistsData';

const Specialist = () => {

   const imgList = specialistsData.map(({photo,id}) => {
    return(
        <Link
            key={id}
            to={`collective/${id}`}    
            onClick={() => scrollToElementWithoutPrevent(document.querySelector('.header'))}
        >
            <img src={photo} alt="Specialist"/>
        </Link>
    )
   })

    return(
        <div className="history_specialists">
            <div className="history_specialists-title history_title">Наши специалисты</div>
            <div className="history_specialists-img">
                {imgList}
            </div>
            <div className="history_read-more">
            <Link 
                onClick={() => scrollToElementWithoutPrevent(document.querySelector('.header'))} 
                to='collective'
            >ПОСМОТРЕТЬ ВСЕХ <img src={arrowRight} alt="Read More"/></Link></div>
        </div>
    )
}

export default Specialist