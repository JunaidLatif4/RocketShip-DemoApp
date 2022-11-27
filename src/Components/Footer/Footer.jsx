import React from "react";

//  Recat icons :
import { AiOutlineTwitter } from "react-icons/ai";

import { AiOutlineInstagram } from "react-icons/ai";

import { AiFillFacebook } from "react-icons/ai";

// CSS :

import "./Footer.scss";







const Footer = () => {
  return (
    <div className="main_footer">
      <div className="footer_content">
        <div className="col_1">
          <div className="contact">Contact Us:</div>
          <div className="hello">HELLO@ROCKETSHIPJA.COM</div>
          <div className="num"> (876) 619-2561</div>
          <div className="num"> (876) 826-7447</div>
          <div className="num"> (876) 648-2638</div>
          <div className="num"> (876) 618-1978</div>
          <div className="num"> (876) 619-1509</div>
          <div className="num"> (876) 648-1175</div>
        </div>

        <div className="col_2">
          <div className="fb"><AiOutlineTwitter /></div>
          <div className="fb"><AiFillFacebook /></div>
          <div className="fb"><AiOutlineInstagram /></div>
        </div>

        <div className="col_1">
          <div className="term">Terms & Conditions</div>
          <div className="term">Privacy Policy</div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
