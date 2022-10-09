

const ServiceItem = ({title,servicesCount,icon}) => {
    return(
        <div className="services_service-item">
            <div className="services_service-title">{title}</div>
            <div className="services_service-content">
                <div className="services_service-count">{servicesCount} услуг</div>
                <img className="services_service-img" src={icon} alt="Therapy"/>
            </div>
        </div>
    )
}

export default ServiceItem