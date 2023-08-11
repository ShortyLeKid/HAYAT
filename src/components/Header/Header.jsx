import './header.scss';
import logo from '../../assets/header_logo.png';
import { useNavigate } from 'react-router-dom';

const Header = () => {

    const navigate = useNavigate();

    return (
        <div className="header">
            <img onClick={() => navigate("/")} className='header__logo' src={logo} />
        </div>
    );
};

export default Header;