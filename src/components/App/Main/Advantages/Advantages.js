import Advantage from "./Advantage/Advantage";

import { advantagesData } from "./advantagesData";

import bird from '../../../../assets/image_bird.png';

const Advantages = () => {

    const advantages = advantagesData.map(item => {
        return(
            <Advantage 
                title = {item.title}
                key = {item.id}
                text = {item.text}
                icon = {item.icon}
            />
        )
    })

    return(
        <section className="advantages">
            <div className="advantages_container">
                <div className="advantages_title">
                    <div className="advantages_title-text"><span className="advantages_title-bold">1 150 000</span>питомцам мы помогли за 18 лет работы</div>
                    <img src={bird} alt="Bird" className="advantages_title-img"/>
                </div>
                <div className="advantages_content">
                    <div className="advantages_content-title">Почему хозяева выбирают нас?</div>
                    <div className="advantages_content-list">
                        {advantages}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Advantages