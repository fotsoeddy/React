import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaEnvelope, FaPhone } from 'react-icons/fa';
import gpt3Logo from '../../assets/logo.svg';
import './footer.css';

const Footer = () => (
  <div className="gpt3__footer section__padding">
    <div className="gpt3__footer-heading">
      <h1 className="gradient__text">Do you want to step into the future before others?</h1>
    </div>

    <div className="gpt3__footer-btn">
      <p>Request Early Access</p>
    </div>

    <div className="gpt3__footer-links">
      <div className="gpt3__footer-links_logo">
        <img src={gpt3Logo} alt="gpt3_logo" />
        <p>FotsoEddy.com <br /> All Rights Reserved</p>
      </div>

      <div className="gpt3__footer-links_div">
        <h4>Links</h4>
        <p>Overons</p>
        <p>Social Media</p>
        <p>Counters</p>
        <p>Contact</p>
      </div>

      <div className="gpt3__footer-links_div">
        <h4>Company</h4>
        <p>Terms & Conditions</p>
        <p>Privacy Policy</p>
        <p>Contact</p>
      </div>

      <div className="gpt3__footer-links_div">
        <h4>Get in touch</h4>
        <p><FaEnvelope /> fotsoeddysteve@gmail.com</p>
        <p><FaPhone /> 237 691-32-72-57</p>
        <p>info@paymenet</p>
      </div>
    </div>

    {/* Social Media Icons */}
    <div className="gpt3__footer-socials">
      <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebook /></a>
      <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
      <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
    </div>

    <div className="gpt3__footer-copyright">
      <p>@2025 Fotso Eddy. All rights reserved.</p>
    </div>
  </div>
);

export default Footer;
