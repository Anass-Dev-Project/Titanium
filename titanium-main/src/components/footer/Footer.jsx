import React, { useEffect } from "react";
import './footer.css';
import { BsFacebook, BsInstagram } from "react-icons/bs";
import { MdEmail, MdPhone, MdLocationOn } from "react-icons/md";

// Composant Footer principal
const Footer = () => {
  useEffect(() => {
    // Animations des éléments lorsqu'ils entrent dans la vue
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate');
        }
      });
    }, { threshold: 0.1 });

    // Sélection des éléments à animer
    const elements = document.querySelectorAll('.footer__column, .footer__subtitle, .footer__list li, .footer__contact-item');
    elements.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <footer className="footer">
      {/* Conteneur pour les bulles animées */}
      <div className="footer__bubbles">
        <div className="bubble bubble--1"></div>
        <div className="bubble bubble--2"></div>
        <div className="bubble bubble--3"></div>
        <div className="bubble bubble--4"></div>
        <div className="bubble bubble--5"></div>
      </div>

      <div className="footer__content">
        <div className="footer__columns">
          {/* Réseaux sociaux */}
          <div className="footer__column">
            <div className="footer__section">
              <h3 className="footer__subtitle">NOS RÉSEAUX</h3>
              <ul className="footer__list footer__social-list">
                <li>
                  <a href="https://www.facebook.com/profile.php?id=100011195713319" target="_blank" rel="noopener noreferrer" className="footer__social-link">
                    <BsFacebook className="footer__social-icon" />
                    <span className="footer__list-item">Facebook</span>
                  </a>
                </li>
                <li>
                  <a href="https://www.instagram.com/titaniumboats/" target="_blank" rel="noopener noreferrer" className="footer__social-link">
                    <BsInstagram className="footer__social-icon" />
                    <span className="footer__list-item">Instagram</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Contact */}
          <div className="footer__column">
            <div className="footer__section">
              <h3 className="footer__subtitle">CONTACT</h3>
              {/* Email */}
              <div className="footer__contact-item">
                <div className="footer__contact-icon-wrapper">
                  <MdEmail className="footer__contact-icon" />
                </div>
                <a href="mailto:contact@bateauxtitanium.com" className="footer__contact-link">
                  <span className="footer__contact-text">contact@bateauxtitanium.com</span>
                </a>
              </div>
              {/* Téléphone */}
              <div className="footer__contact-item">
                <div className="footer__contact-icon-wrapper">
                  <MdPhone className="footer__contact-icon" />
                </div>
                <a href="tel:+123456789" className="footer__contact-link">
                  <span className="footer__contact-text">07 76 01 04 71</span>
                </a>
              </div>
              {/* Adresse */}
              <div className="footer__contact-item">
                <div className="footer__contact-icon-wrapper">
                  <MdLocationOn className="footer__contact-icon" />
                </div>
                <div className="footer__contact-link">
                  <span className="footer__contact-text">Port du bourget, 73000 Bourget du Lac</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bas du footer */}
      <div className="footer__bottom">
        <small className="footer__copyright">
          © {new Date().getFullYear()} Bateaux Titanium — Tous droits réservés.
          <span className="footer__copyright-wave">🚢</span>
        </small>
      </div>
    </footer>
  );
};

export default Footer;