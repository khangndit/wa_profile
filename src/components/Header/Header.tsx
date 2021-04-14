import './Header.css';
import logo from '../../assets/img/logo.png';
import avatar from '../../assets/img/avt.png';
import { CaretDownOutlined } from '@ant-design/icons';

const Header = () => {
  return (
    <header id="header">
      <div className="header__content">
        <div className="header__content-logo">
          <img src={logo} alt="Logo" />
          <h2 className="title">All Service</h2>
        </div>
        <div className="header__content-avt">
          <img src={avatar} alt="avatar" />
          <h2 className="title">Howdy Weslay</h2>
          <button className="btn">
            <CaretDownOutlined style={{ color: '#A1D6FA' }} />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
