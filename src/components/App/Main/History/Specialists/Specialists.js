import arrowRight from '../../../../../assets/History/right-arrow-forward-svgrepo-com.svg';
import specialist from '../../../../../assets/History/specialist.png';

const Specialist = () => {
    return(
        <div className="history_specialists">
            <div className="history_specialists-title history_title">Наши специалисты</div>
            <div className="history_specialists-img">
                <img src={specialist} alt="Specialist"/>
                <img src={specialist} alt="Specialist"/>
                <img src={specialist} alt="Specialist"/>
                <img src={specialist} alt="Specialist"/>
                <img src={specialist} alt="Specialist"/>
                <img src={specialist} alt="Specialist"/>
            </div>
            <div className="history_read-more">ПОСМОТРЕТЬ ВСЕХ <img src={arrowRight} alt="Read More"/></div>
        </div>
    )
}

export default Specialist