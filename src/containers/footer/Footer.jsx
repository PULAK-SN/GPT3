import React from "react";
import logoImg from "../../assets/logo.svg";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="gpt3__footer section__padding" id="footer">
      <div className="gpt3__footer-heading">
        <h1 className="gradient__text">
          Do you want to step into future before others
        </h1>
      </div>

      <div className="gpt3__footer-btn">
        <p>Request Early Access</p>
      </div>
      <div className="gpt3__footer-links">
        <div className="gpt3__footer-links_logo">
          <img src={logoImg} alt="logo" />
          <p>Crechterwoord K12 182 DK Alknjkcb, All rights reserved</p>
        </div>
        <div className="gpt3__footer-links_div">
          <h4>Links</h4>
          <p>Overons</p>
          <p>Social Media</p>
          <p>Counters</p>
          <p>contact</p>
        </div>
        <div className="gpt3__footer-links_div">
          <h4>Company</h4>
          <p>Terms & Conditions</p>
          <p>Privacy Policy</p>
          <p>contact</p>
        </div>
        <div className="gpt3__footer-links_div">
          <h4>Get in Touch</h4>
          <p>Crechterwoord K12 182 DK Alknjkcb</p>
          <p>085-565942</p>
          <p>info@payme.net</p>
        </div>
      </div>

      <div className="gpt3__footer-copyright">
        <p>@ GPT-3 2025, All rights reserved</p>
      </div>
    </div>
  );
};

export default Footer;
