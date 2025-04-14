import React from "react";
import './footer.css';
import { BsFacebook, BsInstagram } from "react-icons/bs";
import { MdLocationOn, MdEmail, MdPhone } from "react-icons/md";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__top">
        <div className="footer__contact">
          <MdLocationOn className="footer__icon" />
          <div>
            <h4>ADRESSE</h4>
            <p>Port du bourget 73000 Bourget du lac</p>
          </div>
        </div>
        <div className="footer__contact">
          <MdPhone className="footer__icon" />
          <div>
            <h4>TÉLÉPHONE</h4>
            <p>+33 7 76 01 04 71</p>
          </div>
        </div>
        <div className="footer__contact">
          <MdEmail className="footer__icon" />
          <div>
            <h4>E-MAIL</h4>
            <p>contact@bateauxtitanium.com</p>
          </div>
        </div>
      </div>

      <div className="footer__main">
        <div className="footer__brand">
          <h2 className="footer__logo">Titanium</h2>
          <p>Des bateaux pensés pour la détente, la famille et l’aventure.</p>
        </div>

        <div className="footer__nav">
          <h4>NAVIGATION</h4>
          <ul>
            <li><a href="#">Accueil</a></li>
            <li><a href="#pro">Gammes</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>

        <div className="footer__social">
          <h4>SUIVEZ-NOUS</h4>
          <div className="footer__social-icons">
            <a href="https://www.facebook.com/profile.php?id=100011195713319" target="_blank" rel="noopener noreferrer"><BsFacebook /></a>
            <a href="https://www.instagram.com/titaniumboats/" target="_blank" rel="noopener noreferrer"><BsInstagram /></a>
          </div>
        </div>
      </div>

      <div className="footer__bottom">
        <small>&copy; {new Date().getFullYear()} Bateaux Titanium — Tous droits réservés. <a href="#">Mentions légales</a></small>
      </div>
    </footer>
  );
};

export default Footer;
