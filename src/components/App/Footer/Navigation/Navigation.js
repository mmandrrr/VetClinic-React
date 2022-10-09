import logo from '../../../../assets/Logos/footerLogo.svg';

const Navigation = () => {
    return(
        <div className="footer_navigation">
            <a href=""  className="footer_logo"><img src={logo} alt="Footer Logo"/></a>
            <div className="footer_menu">
                <ul className="footer_confidential">Политика конфиденциальности в отношении обработки персональных данных</ul>
                <ul className="footer_services">
                    <li className="footer_services-item"><a href="" className="footer_services-link">Главная</a></li>
                    <li className="footer_services-item"><a href="" className="footer_services-link">Услуги и цены</a></li>
                    <li className="footer_services-item"><a href="" className="footer_services-link">История компании</a></li>
                    <li className="footer_services-item"><a href="" className="footer_services-link">Наши специалисты</a></li>
                    <li className="footer_services-item"><a href="" className="footer_services-link">Вакансии</a></li>
                    <li className="footer_services-item"><a href="" className="footer_services-link">Реквизиты</a></li>
                    <li className="footer_services-item"><a href="" className="footer_services-link">Онлайн-оплата</a></li>
                </ul>
                <ul className="footer_blog">
                    <li className="footer_blog-item"><a href="" className="footer_blog-link">Отзывы</a></li>
                    <li className="footer_blog-item"><a href="" className="footer_blog-link">Контакты</a></li>
                    <li className="footer_blog-item"><a href="" className="footer_blog-link">Груминг-салон</a></li>
                    <li className="footer_blog-item"><a href="" className="footer_blog-link">Косметика</a></li>
                    <li className="footer_blog-item"><a href="" className="footer_blog-link">Новости и акции</a></li>
                    <li className="footer_blog-item"><a href="" className="footer_blog-link">Блог</a></li>
                </ul>
            </div>
        </div>
    )
}

export default Navigation