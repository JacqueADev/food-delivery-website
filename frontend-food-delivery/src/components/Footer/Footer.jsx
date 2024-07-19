import React from "react";
import "./Footer.css";
import { assets } from "../../assets/assets";

const Footer = () => {
  return (
     <div className="footer" id="footer">
        <div className="footer-content">
            <div className="footer-content-left">
                <img src={assets.logo} alt="" />
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptates quibusdam explicabo obcaecati sunt hic facilis cupiditate laborum dicta veritatis, sapiente officia sit tenetur, ipsum saepe a. Magnam consequuntur odio asperiores.</p>
                <div className="footer-social-icons">
                    <img src={assets.facebook_icon} alt="" />
                    <img src={assets.twitter_icon} alt="" />
                    <img src={assets.linkedin_icon} alt="" />
                </div>
            </div>
            <div className="footer-content-center">
                <h2>Empresa</h2>
                <ul>
                    <li>Home</li>
                    <li>Sobre Nós</li>
                    <li>Delivery</li>
                    <li>Politica de Privacidade</li>
                </ul>
            </div>
            <div className="footer-content-right">
                <h2>Contato</h2>
                <ul>
                    <li>+55-012-1234-5678</li>
                    <li>Contato@delishdash.com</li>
                </ul>
            </div>    
        </div>
        <p className="footer-copyright">
            
            Copyright 2024 @ DelishDash.com - All Right Reserved.
            <hr />
        </p>
     </div>
  );
};

export default Footer;
