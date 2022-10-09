import { Link } from "react-router-dom"

import arrow from '../../../../assets/History/right-arrow-forward-svgrepo-com.svg'

const AppoinmentServices = () => {
    return(
        
        <div className="appointment_content">
            <Link to='/' className="appointment_back"><img src={arrow} alt="Back" /> НАЗАД</Link>
            <div className="appointment_services">
                <Link to='appoinment-form' className="appointment_online">
                    <div className="appointment_online-text">Онлайн-консультация</div>
                    <div className="appointment_online-price">1000грн</div>
                </Link>
                <Link to='appoinment-form' className="appointment_online">
                    <div className="appointment_online-text">Прием в клинике</div>
                    <div className="appointment_online-price">Бесплатно</div>
                </Link>
            </div>       
        </div>
    )
}

export default AppoinmentServices