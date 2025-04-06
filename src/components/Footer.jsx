import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import Logo from './Logo';
import Form from '../pages/Form';
import LogoImage2 from '../images/logoImage.png';

function Footer() {
  return (
    <>
      <Logo />
      <div className="footer-container">
        <img src={LogoImage2} alt="Logo" />
        <p className="copyright">&copy; {new Date().getFullYear()} Miso Hungry</p>
      </div>
    </>
  );
}

export default Footer;