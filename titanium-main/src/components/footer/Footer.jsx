import React, { useEffect } from "react";
import './footer.css';
import { BsFacebook, BsInstagram } from "react-icons/bs";
import { MdEmail, MdPhone, MdLocationOn } from "react-icons/md";
import { RiShipLine } from "react-icons/ri";

const Footer = () => {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate');
        }
      });
    }, { threshold: 0.1 });

    const elements = document.querySelectorAll('.footer__column, .footer__title, .footer__subtitle, .footer__list li, .footer__note, .footer__contact-item');
    elements.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <footer className="footer">
      <div className="footer__shape-container">
        <div className="footer__shape">
          <div className="footer__content">
            <div className="footer__columns">
              <div className="footer__column">
                <h2 className="footer__title">
                  <RiShipLine className="footer__title-icon" /> LA BOUTIQUE
                </h2>
                <div className="footer__section">
                  <h3 className="footer__subtitle">Mention légale</h3>
                  <ul className="footer__list">
                    <li><span className="footer__list-item">Politique de confidentialité</span></li>
                    <li><span className="footer__list-item">CO2</span></li>
                    <li><span className="footer__list-item">Livraison et retours</span></li>
                    <li><span className="footer__list-item">Engagement concours</span></li>
                  </ul>
                </div>
              </div>

              <div className="footer__column">
                <div className="footer__section">
                  <h3 className="footer__subtitle">NOS RÉSEAUX</h3>
                  <ul className="footer__list footer__social-list">
                    <li>
                      <a href="https://www.facebook.com/profile.php?id=100011195713319" target="_blank" rel="noopener noreferrer" className="footer__social-link">
                        <BsFacebook className="footer__social-icon" />
                        <span className="footer__list-item">Facebook</span>
                        <span className="footer__social-hover"></span>
                      </a>
                    </li>
                    <li>
                      <a href="https://www.instagram.com/titaniumboats/" target="_blank" rel="noopener noreferrer" className="footer__social-link">
                        <BsInstagram className="footer__social-icon" />
                        <span className="footer__list-item">Instagram</span>
                        <span className="footer__social-hover"></span>
                      </a>
                    </li>
                    <li><span className="footer__list-item">Vendue</span></li>
                  </ul>
                </div>
                <div className="footer__note">
                  Noté par <span className="footer__highlight">@diment.cher</span>
                </div>
              </div>

              <div className="footer__column">
                <div className="footer__section">
                  <h3 className="footer__subtitle">CONTACT</h3>

                  <div className="footer__contact-item">
                    <div className="footer__contact-icon-wrapper">
                      <MdEmail className="footer__contact-icon" />
                    </div>
                    <a href="mailto:contact@bateauxtitanium.com" className="footer__contact-link">
                      <span className="footer__contact-text">contact@bateauxtitanium.com</span>
                      <span className="footer__contact-underline"></span>
                    </a>
                  </div>

                  <div className="footer__contact-item">
                    <div className="footer__contact-icon-wrapper">
                      <MdPhone className="footer__contact-icon" />
                    </div>
                    <a href="tel:+123456789" className="footer__contact-link">
                      <span className="footer__contact-text">07 76 01 04 71</span>
                      <span className="footer__contact-underline"></span>
                    </a>
                  </div>

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
        </div>
      </div>

      <div className="footer__bottom">
        <small className="footer__copyright">
          &copy; {new Date().getFullYear()} Bateaux Titanium — Tous droits réservés.
          <span className="footer__copyright-wave">🚢</span>
        </small>
      </div>
    </footer>
  );
};

export default Footer;
