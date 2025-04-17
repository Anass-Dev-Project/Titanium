import React from "react";
import "./home.css";
import { BsFacebook, BsInstagram } from "react-icons/bs";
import { MdEmail, MdPhone } from "react-icons/md";

function Home() {
  const handleFacebookClick = () => {
    window.open("https://www.facebook.com/profile.php?id=100011195713319", "_blank", "noopener,noreferrer");
  };

  const handleInstagramClick = () => {
    window.open("https://www.instagram.com/titaniumboats", "_blank", "noopener,noreferrer");
  };

  const handleEmailClick = () => {
    window.location.href = "mailto:contact@bateauxtitanium.com";
  };

  const handlePhoneClick = () => {
    window.location.href = "tel:0776010471";
  };

  return (
    <section id="home">
      <div className="home__contain">
        <div className="home__about">
          <h3>
            Envie d'une balade en famille ou entre amis, d'une sortie pêche, d'un
            week-end détente ou tout simplement d'un instant de farniente ?
          </h3>
          <div className="home__bottom">
            <div className="socialNetwork">
              <button className="socialButton" onClick={handleFacebookClick} aria-label="Facebook">
                <BsFacebook />
              </button>
              <button className="socialButton" onClick={handleInstagramClick} aria-label="Instagram">
                <BsInstagram />
              </button>
              <button className="socialButton" onClick={handleEmailClick} aria-label="Email">
                <MdEmail />
              </button>
              <button className="socialButton" onClick={handlePhoneClick} aria-label="Phone">
                <MdPhone />
              </button>
            </div>
          </div>
        </div>
        <div className="home__description">
          <p>
            Nous vous proposons des bateaux Titanium élégants, confortables, aux lignes épurées et modernes et conçus avec des matériaux d'excellente qualité.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Home;