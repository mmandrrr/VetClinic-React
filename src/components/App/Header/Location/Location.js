import locationImg from '../../../../assets/Location/location-icon.svg';

const Location = ({openModal,location}) => {
    return(
        <div
            onClick={openModal} 
            className="header_location">
            <img src={locationImg} alt="Location icon"/>
            <div className="header_location-city">{location}</div>
        </div>
    )
}

export default Location