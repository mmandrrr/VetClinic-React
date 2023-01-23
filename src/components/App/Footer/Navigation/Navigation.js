import { Link } from 'react-router-dom';

import { scrollToElementWithPrevent } from '../../../../services/scrollToElement/scrollToElement';

import logo from '../../../../assets/Logos/footerLogo.svg';

const Navigation = () => {

    return(
        <div className="footer_navigation">
            <Link 
                onClick={(e) => scrollToElementWithPrevent(e,document.querySelector('.header'))}
                to="/"  
                className="footer_logo"
                ><img src={logo} alt="Footer Logo"/></Link>
            <div className="footer_menu">
                <ul className="footer_confidential">Политика конфиденциальности в отношении обработки персональных данных</ul>
                <ul className="footer_services">
                    <li 
                        className="footer_services-item"
                        onClick={(e) => scrollToElementWithPrevent(e,document.querySelector('.header'))}
                    ><Link to="/" className="footer_services-link">Главная</Link></li>
                    <li className="footer_services-item"><a href="" className="footer_services-link">Услуги и цены</a></li>
                    <li 
                        className="footer_services-item"
                        onClick={(e) => scrollToElementWithPrevent(e,document.querySelector('.header'))}    
                    ><Link to="company-history" className="footer_services-link">История компании</Link></li>
                    <li 
                        className="footer_services-item"
                        onClick={(e) => scrollToElementWithPrevent(e,document.querySelector('.header'))}    
                    ><Link to="/collective" className="footer_services-link">Наши специалисты</Link></li>
                    <li className="footer_services-item"><a href="" className="footer_services-link">Вакансии</a></li>
                    <li className="footer_services-item"><a href="" className="footer_services-link">Реквизиты</a></li>
                    <li className="footer_services-item"><a href="" className="footer_services-link">Онлайн-оплата</a></li>
                </ul>
                <ul className="footer_blog">
                    <li className="footer_blog-item"><a href="" className="footer_blog-link">Отзывы</a></li>
                    <li 
                        onClick={(e) => scrollToElementWithPrevent(e,document.querySelector('.header'))}
                        className="footer_blog-item"><Link to="contacts" className="footer_blog-link">Контакты</Link></li>
                    <li className="footer_blog-item"><a href="" className="footer_blog-link">Груминг-салон</a></li>
                    <li className="footer_blog-item"><a href="" className="footer_blog-link">Косметика</a></li>
                    <li 
                        onClick={(e) => scrollToElementWithPrevent(e,document.querySelector('.header'))}
                        className="footer_blog-item"><Link to="/news" className="footer_blog-link"
                    >Новости и акции</Link></li>
                    <li 
                        onClick={(e) => scrollToElementWithPrevent(e,document.querySelector('.header'))}
                        className="footer_blog-item"><Link to="/blog" className="footer_blog-link"
                    >Блог</Link></li>
                </ul>
            </div>
        </div>
    )
}

export default Navigation