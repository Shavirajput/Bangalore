import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <div>
        <div className='Header-logo'>
      <img id="logo" src="Logo.png" alt="Logo" />
      <img className='client-logo' src="client-logo.png" alt="client-Logo" />
      </div>
      <div className="banner">
        <img className="banner-img" src="Banner.png" alt="Banner" />
      </div>
    </div>
  );
};

export default Header;
