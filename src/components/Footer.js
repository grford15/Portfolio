import React from 'react';
import { SocialIcon } from 'react-social-icons';
import './CSS/Footer.css';


const Footer = () => {
    return(
        <div className="footer-container">
            <div className="name">
                <h4>Created by Greg Rutherford</h4>
                <h6>2019</h6>
            </div>
            <div className="social-media-footer">
                <div className="social-media-icons">GitHub: <SocialIcon className="icons" url="https://www.linkedin.com/in/greg-rutherford/" /></div>
                <div className="social-media-icons">LinkedIn: <SocialIcon className="icons" bgColor="#24292D" url="https://github.com/grford15"  /></div>
            </div>
        </div>
    )
}

export default Footer;