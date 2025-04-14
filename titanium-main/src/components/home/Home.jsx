import React from "react";
import "./home.css";
import { BsFacebook } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";

function Home() {
  return (
    <section id="home">
      <div className="home__contain">
        {/* <h1>Bienvenue chez Bateaux Titanium</h1> */}
      </div>
      <div className="home__title">
        <h1>Bateaux Titanium</h1>
      </div>
      <div className="home__about">
        <h3>
          Envie d'une balade en famille ou entre amis, d'une sortie pêche, d'un
          week-end détente ou tout simplement d'un instant de farniente ?
        </h3>
        <h2>
          Nous avons la solution ! Notre gamme bateaux Titanium est faite pour vous !
        </h2>
        <p>
          Nous vous proposons des bateaux Titanium élégants, confortables, aux lignes
          épurées et modernes et conçus avec des matériaux d'excellente qualité.
          Faire le choix Titanium c'est la garantie de merveilleux moments de
          plaisir et de détente, et l'occasion de se créer des souvenirs
          inoubliables ! Nous vous souhaitons une agréable navigation avec
          Titanium !
        </p>
        <div className="home__bottom">
          <h2>Bienvenus à bord !!!</h2>
          <div className="socialNetwork">
            <a
              href="https://www.facebook.com/profile.php?id=100011195713319"
              target="_blank"
              rel="noopener noreferrer"
              alt="facebook"
            >
              <BsFacebook />
            </a>
            <a
              href="https://www.instagram.com/titaniumboats"
              target="_blank"
              rel="noopener noreferrer"
              alt="instagram"
            >
              <BsInstagram />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;
