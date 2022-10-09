import ServiceItem from "./ServiceItem/ServiceItem";

import { servicesData } from "./servicesData";

const Services = () => {

    const services = servicesData.map(item => {
        return(
            <ServiceItem 
                key={item.id}
                id = {item.id}
                title = {item.title}
                servicesCount = {item.servicesCount}
                icon = {item.icon}
            />
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