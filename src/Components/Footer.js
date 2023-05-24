import React from "react";
import Logo from "../Assets/Logo-2.svg";
import { BsTwitter } from "react-icons/bs";
import { SiLinkedin } from "react-icons/si";
import { BsInstagram } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";
import { ImLocation } from "react-icons/im";
import { BsTelephoneFill } from "react-icons/bs";
import { BsClockFill } from "react-icons/bs";


const Footer = () => {
  return (
    <div className="footer-wrapper">
      <div className="footer-section-one">
        <div className="footer-logo-container">
          <img src={Logo} alt="" />
        </div>
        <div className="footer-icons">
          <FaFacebookF />
          <BsInstagram />
          <SiLinkedin />
          <BsTwitter />                    
        </div>
      </div>
      <div className="footer-section-two">
        <div className="footer-section-columns">
          <ImLocation/>
          <span>Water St, Oakville, ON L6j 2Z4</span>
        </div>
        <div className="footer-section-columns" style={{marginLeft:20,}}>
          <BsTelephoneFill/>
          <span>905-399-9494</span>
        </div>
        <div className="footer-section-columns">
          <BsClockFill/>
          <span>Scheduled</span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
