import './header.scss';
import logo from '../../assets/header_logo.png'

const Header = () => {


    return (
        <div className="header">
            <img className='header__logo' src={logo} />
        </div>
    );
};

export default Header;