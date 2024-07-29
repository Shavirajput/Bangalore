import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <div>
      <div className='footer'>
        <p>Visit <a href="https://247h.raphacure.com/" target="_blank" rel="noreferrer">https://247h.raphacure.com/</a> and proceed further for booking process.</p>
        <p>Login with your official Email ID, verify with OTP.</p>
        <p>Go to my subscription to view all the services and avail your preferred services.</p>
      </div>
      <div className="img-div">
        <a href="https://www.instagram.com/rajputshavi.3/?utm_source=qr&r=nametag" target="_blank" rel="noreferrer">
          <img className="social-icon" src="insta.svg" alt="Instagram" />
        </a>
        <a href="https://www.facebook.com" target="_blank" rel="noreferrer">
          <img className="social-icon" src="fb.svg" alt="Facebook" />
        </a>
        <a href="https://www.youtube.com" target="_blank" rel="noreferrer">
          <img className="social-icon" src="yt.svg" alt="YouTube" />
        </a>
        <a href="https://www.twitter.com" target="_blank" rel="noreferrer">
          <img className="social-icon" src="twit.svg" alt="Twitter" />
        </a>
        <a href="https://www.linkedin.com" target="_blank" rel="noreferrer">
          <img className="social-icon" src="linkedin.svg" alt="LinkedIn" />
        </a>
      </div>
    </div>
  );
}

export default Footer;
