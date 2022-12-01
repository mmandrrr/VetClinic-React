import { Link } from 'react-router-dom';

import arrowRight from '../../../../../assets/History/right-arrow-forward-svgrepo-com.svg';
import specialist from '../../../../../assets/History/specialist.png';

import {specialistsData} from '../../../Collective/Specialists/specialistsData';

const Specialist = () => {
    const scrollToTop = (e,element) => {
        element.scrollIntoView(true)
    }

   const imgList = specialistsData.map(({photo,id}) => {
    return(
        <Link
            key={id}
            to={`collective/${id}`}    
            onClick={(e) => scrollToTop(e,document.querySelector('.header'))}
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
                onClick={(e) => scrollToTop(e,document.querySelector('.header'))} 
                to='collective'
            >ПОСМОТРЕТЬ ВСЕХ <img src={arrowRight} alt="Read More"/></Link></div>
        </div>
    )
}

export default Specialist