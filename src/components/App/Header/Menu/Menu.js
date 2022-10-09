import { Link } from "react-router-dom"

const Menu = () => {
    return(
        <nav className="header_menu">
            <ul className="header_menu-list">
                <li className="header_menu-item"><a href="" className="header_menu-link">ЛИЧНЫЙ КАБИНЕТ</a></li>
                <li className="header_menu-item">
                    <a href="" className="header_menu-link">О НАС </a> 
                    <ul className="header_about">
                        <li className="header_about-item"><a href="" className="header_about-link">Услуги и цены</a></li>
                        <li className="header_about-item"><a href="" className="header_about-link">Коллектив</a></li>
                        <li className="header_about-item"><a href="" className="header_about-link">История компании</a></li>
                    </ul>  
                </li>
                <li className="header_menu-item"><a href="" className="header_menu-link">НОВОСТИ И АКЦИИ</a></li>
                <li className="header_menu-item"><a href="" className="header_menu-link">КОНТАКТЫ</a></li>
                <li className="header_menu-item"><a href="" className="header_menu-link">БЛОГ</a></li>
            </ul>
        </nav>
    )
}

export default Menu