import { Link } from 'react-router-dom';

import inst from '../../../../../assets/Social/inst.svg';
import fb from '../../../../../assets/Social/fb.svg';
import vk from '../../../../../assets/Social/vk.svg';
import youtube from '../../../../../assets/Social/youtube.svg';


const Slides = ({title,className}) => {

    const scrollToTop = (e,element) => {
        element.scrollIntoView(true)
    }

    return(
        <div className={className}>
            <div className="slider_item-title">{title}</div>
            <Link 
                to='/appointment' 
                className="slider_item-button"
                onClick={(e) => scrollToTop(e,document.querySelector('.header'))}
            >записаться</Link>
            <div className="slider_item-social">
                <img src={inst} alt="Instagramm"/>
                <img src={fb} alt="Facebook"/>
                <img src={vk} alt="VKontakte"/>
                <img src={youtube} alt="Youtube"/>
            </div>
        </div>
)
}

export default Slides