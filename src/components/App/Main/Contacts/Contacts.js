import location from '../../../../assets/Address/address-location.svg';
import phone from '../../../../assets/Address/address-phone.svg';
import time from '../../../../assets/Address/address-time.svg';

const Contacts = () => {
    return(
        <section className="contacts">
            <div className="contacts_container">
                <div className="contacts_title">Контакты</div>
                <div className="contacts_content">
                    <div className="contacts_address">
                        <div className="contacts_address-title">Айболит на Краснополянской</div>
                        <div className="contacts_address-content">
                            <div className="contacts_address-street contacts_address-wrapper"><img src={location} alt="Street"/>27A, вулиця Олеся Гончара, 27А</div>
                            <div className="contacts_address-phone contacts_address-wrapper"><img src={phone} alt="Phone Number"/>(066) 0509979</div>
                            <div className="contacts_address-schedule contacts_address-wrapper"><img src={time} alt="Working Time"/>8:00-22:00</div>
                        </div>
                    </div>
                    <div className="contacts_map">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d20686.38395628588!2d34.52934241396795!3d49.60155872960487!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d82f527c29b3c3%3A0xbc4a3428b88176f!2z0J_QtdGA0LLQsNGPINCz0L7RgNC-0LTRgdC60LDRjyDQutC70LjQvdC40YfQtdGB0LrQsNGPINCx0L7Qu9GM0L3QuNGG0LA!5e0!3m2!1sru!2sua!4v1664959759473!5m2!1sru!2sua"
                            height="526" 
                            style={{border : 0}} 
                            allowFullScreen="" 
                            loading="lazy" 
                            referrerPolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contacts