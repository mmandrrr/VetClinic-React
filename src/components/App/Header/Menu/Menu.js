import { Link } from "react-router-dom";

const Menu = () => {
    return(
        <nav className="header_menu">
            <ul className="header_menu-list">
                <li className="header_menu-item"><a href="" className="header_menu-link">ЛИЧНЫЙ КАБИНЕТ</a></li>
                <li className="header_menu-item">
                    <div href="" className="header_menu-link">О НАС </div> 
                    <ul className="header_about">
                        <li className="header_about-item"><Link to='/service' className="header_about-link">Услуги и цены</Link></li>
                        <li className="header_about-item"><Link to="collective" className="header_about-link">Коллектив</Link></li>
                        <li className="header_about-item"><Link to="/company-history" className="header_about-link">История компании</Link></li>
                    </ul>  
                </li>
                <li className="header_menu-item"><Link to="/news" className="header_menu-link">НОВОСТИ И АКЦИИ</Link></li>
                <li className="header_menu-item"><Link to="/contacts" className="header_menu-link">КОНТАКТЫ</Link></li>
                <li className="header_menu-item"><Link to="/blog" className="header_menu-link">БЛОГ</Link></li>
            </ul>
        </nav>
    )
}

export default Menu