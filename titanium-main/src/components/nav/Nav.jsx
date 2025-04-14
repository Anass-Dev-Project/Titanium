import BoatLogo from "../../assets/logo/311301-ffffff.svg";
import React, {useState} from "react";
import './nav.css';


function Nav() {

  const [showLinks, setShowLinks] = useState(false)

  const handleShowLinks = () => {
    setShowLinks(!showLinks)
  }
  return (
    <nav className={`navbar ${showLinks ? " show-nav" : "hide-nav"}`}>
      <div className="navbar__logo" style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
  <img src={BoatLogo} alt="Logo bateau" height="40" />
  <h1>Titanium</h1>
</div>

      <ul className="navbar__links">
        <li className="navbar__item slideInDown-1" onClick={handleShowLinks} >
          <a href="#home" className="navbar__link">
            Accueil
          </a>
        </li>
        <li className="navbar__item slideInDown-2" onClick={handleShowLinks}>
          <a href="#gammes" className="navbar__link">
            Gammes
          </a>
        </li>
        <li className="navbar__item slideInDown-6" onClick={handleShowLinks}>
          <a href="#contact" className="navbar__link">
            Contact
          </a>
        </li>
      </ul>
      <button className="navbar__burger" onClick={handleShowLinks}>
        <span className="burger-bar"></span>
      </button>
    </nav>
  );
}

export default Nav
