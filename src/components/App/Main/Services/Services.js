import { Link } from "react-router-dom";

import ServiceItem from "./ServiceItem/ServiceItem";

import { servicesData } from "./servicesData";
import { scrollToElementWithoutPrevent } from "../../../../services/scrollToElement/scrollToElement";

const Services = () => {

    const services = servicesData.map(item => {
        return(
            <Link 
                key={item.id}
                to={`service/${item.id}`} 
                style={{'textDecoration' : 'none'}}
                onClick={() => scrollToElementWithoutPrevent(document.querySelector('.header'))}>
                <ServiceItem 
                    id = {item.id}
                    title = {item.title}
                    servicesCount = {item.servicesCount}
                    icon = {item.icon}
                />
            </Link>
        )
    })

    return(
        <section className="services">
            <div className="services_container">
                {services}
            </div>
        </section>
    )
}

export default Services