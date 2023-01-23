import { scrollToElementWithPrevent } from "../../../../services/scrollToElement/scrollToElement"

const Navigation = () => {

    return(
        <div className="service_title">
            <h1 className="service_title-text">Терапия</h1>
            <ul className="service_title-menu">
                <li className="service_menu-item" onClick={(e) => scrollToElementWithPrevent(e,document.querySelector('.service_specialists'))}>
                    <a href="#" className="service_menu-link">ЗАПИСАТЬСЯ НА ПРИЕМ</a>
                </li>
                <li className="service_menu-item" onClick={(e) => scrollToElementWithPrevent(e,document.querySelector('.service_description'))}>
                    <a href="#" className="service_menu-link">ТЕРАПИЯ В НАШЕЙ КЛИНИКЕ</a>
                </li>
                <li className="service_menu-item" onClick={(e) => scrollToElementWithPrevent(e,document.querySelector('.service_first-subtitle'))}>
                    <a href="#" className="service_menu-link">ПОЗДАГОЛОВОК 1</a>
                </li>
                <li className="service_menu-item" onClick={(e) => scrollToElementWithPrevent(e,document.querySelector('.service_second-sub'))}>
                    <a href="#" className="service_menu-link">ПОДЗАГОЛОВОК 2</a>
                </li>
                <li className="service_menu-item" onClick={(e) => scrollToElementWithPrevent(e,document.querySelector('.service_prices'))}>
                    <a href="#" className="service_menu-link">ЦЕНЫ</a>
                </li>
            </ul>
        </div>
    )
}

export default Navigation