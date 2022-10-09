

const Advantage = ({title,text,icon}) => {
    return(
        <div className="advantages_content-item">
            <div className="advantages_item-title">{title}</div>
            <div className="advantages_item-content">
                <img className="advantages_item-img" src={icon} alt="Advantage"/>
                <div className="advantages_item-text">{text}</div>
            </div>
        </div>
    )
}

export default Advantage