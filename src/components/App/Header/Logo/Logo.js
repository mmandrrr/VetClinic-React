import logo from '../../../../assets/Logos/logo-nav.svg';
import { Link } from 'react-router-dom';

const Logo = () => {
    return(
        <Link to="/" className="header_logo">
            <img src={logo} alt="Logo"/>
        </Link>
    )
}

export default Logo