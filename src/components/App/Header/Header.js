import { useState } from 'react';

import Logo from './Logo/Logo';
import Menu from './Menu/Menu';
import Location from './Location/Location';
import Burger from './Burger/Burger';
import ModalCity from './Modal/ModalCity';



const Header = () => {
    const [className, setClassName] = useState('');
    const [location, setLocation] = useState('Полтава');

    const openModal = () => {
        const newClassName = className + 'active';
        setClassName(newClassName)
    }

    const hideModal = (e) => {
        if(e.target.classList.contains('modal_bg') || e.target.classList.contains('modal_close') || e.target.classList.contains('modal_city') ) {
            const newClassName = className.replace(/active/ig,'')
            setClassName(newClassName)
        } 
    }

    const changeLocation = (e) => {
        const target = e.target;
        const newLocation = target.getAttribute('id');
        setLocation(newLocation)
        hideModal(e)
    }

    return(
        <header className="header">
            <div className="header_container">
                <Logo />
                <Menu />
                <Location 
                    openModal = {openModal}
                    location = {location}
                />
                <Burger />
                <ModalCity 
                    className = {className}
                    hideModal = {hideModal}
                    changeLocation = {changeLocation}
                />
            </div>
        </header>
    )
}

export default Header