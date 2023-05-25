import React from 'react';
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faInstagram, faFacebookF } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
    return (
        <div className='footer-section'>
            <div className='footer'>
                <a href="https://twitter.com/?lang=en"> <FontAwesomeIcon className='social-media' icon={faTwitter} /></a>
                <a href="https://www.instagram.com/"> <FontAwesomeIcon className='social-media' icon={faInstagram} /></a>
                <a href="https://www.facebook.com/"> <FontAwesomeIcon className='social-media' icon={faFacebookF} /></a>
            </div>
        </div>
    );
};

export default Footer;