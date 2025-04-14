import React from "react";
import './contact.css';
import {MdOutlineEmail} from 'react-icons/md';
import {BsWhatsapp} from 'react-icons/bs';
import { BsInstagram } from "react-icons/bs";
import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

const data = [
  {
    id: 1,
    name: "13 - NAUTIC 13",
    adress: "20 avenue roger salengro - 13830 ROQUEFORT LA BEDOULE",
    phone: "06 09 54 49 94",
  },
  {
    id: 2,
    name: "30 - EURO NAUTIC",
    adress: "imm le grand pavois - 30240 PORT CAMARGUE",
    phone: "06 30 06 79 54",
  },
  {
    id: 3,
    name: "30 - YACHTING LODGE",
    adress: "9 av de la jetée - 30300 LE CAP D'AGDE",
    phone: "06 09 76 06 54",
  },
  {
    id: 4,
    name: "63 - AVENIR NAUTIQUE",
    adress: "12 rue rodolphe diesel - 63100 CLERMONT FERRAND",
    phone: "06 99 25 96 96 / 04 73 26 71 05",
  },
  {
    id: 5,
    name: "69 - BERNEY LOISIRS",
    adress: "2349 route du beaujolais - 69640 SAINT JULIEN",
    phone: "06 75 20 13 99 / 04 74 67 50 08",
  },
  {
    id: 6,
    name: "73 - MARINE PRO SERVICE",
    adress: "127 rue de la plaine - 73420 VOGLANS",
    phone: "04 79 88 52 96",
  },
  {
    id: 7,
    name: "74 - ATELIER DU BATEAU",
    adress: "130 route des marais - 74410 ST JORIOZ",
    phone: "06 26 72 42 82 / 04 50 52 88 86",
  },
  {
    id: 8,
    name: "56 - SARZEAU NAUTIC",
    adress: "63 rue de la compagnie du capitaine Jacky Thomas - 56370 SARZEAU",
    phone: "02 97 48 74 31",
  },
  {
    id: 9,
    name: "05 - NAUTIC PERFORMANCE",
    adress: "25 le forest rue serre verger - 05160 SAVINES LE LAC",
    phone: "06 24 58 63 38 / 04 88 29 36 20",
  },
  {
    id: 10,
    name: "SUISSE - LEPORI MARINE",
    adress: "1 route de bremblens - 1122 ROMANEL SUR MORGES",
    phone: "021 869 74 25 / 0041 79 436 65 85",
  },
  {
    id: 11,
    name: "26 - VALENCE MECANAUTIC (ASSISTANCE NAUTIQUE)",
    adress: "port de l'eperviere - 26000 VALENCE",
    phone: "04 75 41 17 35",
  },
]

const Contact = () => {
  const form = useRef();
  const [valid, setValid] = useState(false);
  
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_b66lyuo', 'template_9sj5y7m', form.current, 'P_hPhq8G1OZi56fcF')
      .then((result) => {
          console.log(result.text);
          setValid(true);
      }, (error) => {
          console.log(error.text);
      });
  };
    return (
      <section id="contact">
        <div className="contact__title">
              <h2>Contactez-nous</h2>
        </div>

        <div className="contact__container">
          <div className="contact__options">
            <article className="contact__option">
              <MdOutlineEmail className="contact__option-icon" />
              <h4>Email</h4>
              <h5>contact@bateauxtitanium.com</h5>
              <a href="mailto:contact@bateauxtitanium.fr" target="_blank">
                Envoyer un message
              </a>
            </article>
            <article className="contact__option">
              <BsWhatsapp className="contact__option-icon" />
              <h4>WhatsApp</h4>
              <h5>+33626240775</h5>
              <a
                href="https://api.whatsapp.com/send?phone=33626240775"
                target="_blank"
              >
                Envoyer un sms
              </a>
            </article>
            <article className="contact__option">
              <BsInstagram className="contact__option-icon" />
              <h4>Instagram</h4>
              <h5>titaniumboats</h5>
              <a href="https://www.instagram.com/titaniumboats" target="_blank">
                Envoyer un message
              </a>
            </article>
          </div>
          <form ref={form} onSubmit={sendEmail} className={` ${valid ? "sending" : ""}`}>
            <input type="text" name="name" placeholder="Prénom" required />
            <input type="text" name="last_name" placeholder="Nom" required />
            <input type="text" name="email" placeholder="Email" required />
            <textarea
              name="message"
              rows="10"
              placeholder="A votre écoute"
              required
            ></textarea>
            <button type="submit" className="btn" value="Send">
              Envoyer le message 
              {/* <span className="send__message">Message envoyé</span> */}
            </button>
            <span className="send__message">Message envoyé</span>
          </form>
        </div>
        <div className="title__dealers">
        <h2 >Où nous trouver ?</h2>
        <h2 >Voici la liste de nos concessionnaires</h2>
        </div>

        <div className="dealers"> 
          {data.map(
            ({
              id,
              name,
              adress,
              phone,
            }) => {
              return (
                <div key={id} className="dealer">
                  <h4>{name}</h4>
                  <p>{adress}</p>
                  <p>{phone}</p>
                </div>
              );
            }
          )}
        </div>
      </section>
    );
  };
  
  export default Contact;
  