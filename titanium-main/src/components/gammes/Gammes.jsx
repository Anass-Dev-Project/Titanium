import React, { useState} from "react";
import "./gammes.css";
import { ImCross } from "react-icons/im";

/* Iwa 390 */
import iwa390_1 from "../../assets/Iwa390/iwa3901.jpg";
import iwa390_2 from "../../assets/Iwa390/iwa3902.jpg";
import iwa390_3 from "../../assets/Iwa390/iwa3903.jpg";
/** 430 */
import titanium430__1 from "../../assets/Titanium430/4301.jpg"; 
import titanium430__2 from "../../assets/Titanium430/4302.jpg"; 
import titanium430__3 from "../../assets/Titanium430/4303.jpg"; 
import titanium430__4 from "../../assets/Titanium430/4304.jpg"; 
import titanium430__5 from "../../assets/Titanium430/4305.jpg"; 
/** Alfa 450 */
import alfa450_1 from "../../assets/Alfa450/4501.jpg";
import alfa450_2 from "../../assets/Alfa450/4502.jpg";
import alfa450_3 from "../../assets/Alfa450/4503.jpg";
import alfa450_4 from "../../assets/Alfa450/4504.jpg";
import alfa450_5 from "../../assets/Alfa450/4505.jpg";
/** 460 fish */
import titanium460fish__1 from "../../assets/Titanium460fish/4601.jpg";
import titanium460fish__2 from "../../assets/Titanium460fish/4602.jpg";
import titanium460fish__3 from "../../assets/Titanium460fish/4603.jpg";
import titanium460fish__4 from "../../assets/Titanium460fish/4604.jpg";
/** 460 open */
import titanium460open__1 from "../../assets/Titanium460open/460open1.jpg";
import titanium460open__2 from "../../assets/Titanium460open/460open2.jpg";
import titanium460open__3 from "../../assets/Titanium460open/460open3.jpg";
import titanium460open__4 from "../../assets/Titanium460open/460open4.jpg";
import titanium460open__5 from "../../assets/Titanium460open/460open5.jpg";
/** 520 open */
import titanium520open__1 from "../../assets/Titanium520/520open1.jpg";
import titanium520open__2 from "../../assets/Titanium520/520open2.jpg";
import titanium520open__3 from "../../assets/Titanium520/520open3.jpg";
import titanium520open__4 from "../../assets/Titanium520/520open4.jpg";
import titanium520open__5 from "../../assets/Titanium520/520open5.jpg";
/* 530 open */
import titanium530open__1 from "../../assets/Titanium530/5301.jpg";
import titanium530open__2 from "../../assets/Titanium530/5302.jpg";
import titanium530open__3 from "../../assets/Titanium530/5303.jpg";
import titanium530open__4 from "../../assets/Titanium530/5304.jpg";
import titanium530open__5 from "../../assets/Titanium530/5305.jpg";
/* 530 sundeck */
import titanium530s__1 from "../../assets/Titanium530sundeck/530s1.jpg";
import titanium530s__2 from "../../assets/Titanium530sundeck/530s2.jpg";
import titanium530s__3 from "../../assets/Titanium530sundeck/530s3.jpg";
import titanium530s__4 from "../../assets/Titanium530sundeck/530s4.jpg";
import titanium530s__5 from "../../assets/Titanium530sundeck/530s5.jpg";
/** 555 open + */
import titanium555open__1 from "../../assets/Titanium555open+/555open1.jpg";
import titanium555open__2 from "../../assets/Titanium555open+/555open2.jpg";
import titanium555open__3 from "../../assets/Titanium555open+/555open3.jpg";
import titanium555open__4 from "../../assets/Titanium555open+/555open4.jpg";
/** 557 sundeck */
import titanium557__1 from "../../assets/Titanium557sundeck/5571.jpg";
import titanium557__2 from "../../assets/Titanium557sundeck/5572.jpg";
import titanium557__3 from "../../assets/Titanium557sundeck/5573.jpg";
import titanium557__4 from "../../assets/Titanium557sundeck/5574.jpg";
import titanium557__5 from "../../assets/Titanium557sundeck/5575.jpg";
/** 560 open */
import titanium560open__1 from "../../assets/Titanium560/560open1.jpg";
import titanium560open__2 from "../../assets/Titanium560/560open2.jpg";
import titanium560open__3 from "../../assets/Titanium560/560open3.jpg";
import titanium560open__4 from "../../assets/Titanium560/560open4.jpg";
import titanium560open__5 from "../../assets/Titanium560/560open5.jpg";


const data = [

      {
        id: 1,
        img: iwa390_1,
        img__2: iwa390_2,
        img__3: iwa390_3,
        img__4: iwa390_1,
        img__5: iwa390_1,
        name: "IWA 390",
        long: "Longueur 3,84m",
        larg: "Largeur 1,64m",
        tir: "Tirant d'eau 0,20m",
        moto: "Motorisation max 10cv",
        poid: "Poids 110kg",
        nb: "Nombre de personnes max 4",
        cat: "Catégorie D",
        equ_serie:
          "Pas d'équipement pour ce modèle",
      },
      {
        id: 2,
        img: titanium430__1,
        img__2: titanium430__2,
        img__3: titanium430__3,
        img__4: titanium430__4,
        img__5: titanium430__5,
        name: "TITANIUM 430",
        long: "Largeur 1,80m",
        larg: "Largeur 1,64m",
        tir: "Tirant d'eau 0,20m",
        moto: "Motorisation max 30cv",
        poid: "Poids 220kg",
        nb: "Nombre de personnes max 4/5",
        cat: "Catégorie C/D",
        equ_serie:
          "Tour de pare brise inox, volant, direction, console de pilotage, sellerie (assise arrière + dossier), échelle",
      },
      {
        id: 3,
        img: alfa450_1,
        img__2: alfa450_2,
        img__3: alfa450_3,
        img__4: alfa450_4,
        img__5: alfa450_5,
        name: "ALFA 450",
        long: "Longueur 4,50m",
        larg: "Largeur 1,85m",
        tir: "Tirant d'eau 0,15m",
        moto: "Motorisation max 30cv",
        poid: "Poids 220kg",
        nb: "Nombre de personnes max 5",
        cat: "Catégorie C",
        equ_serie:
        "Pas d'équipement pour ce modèle",
      },
      {
        id: 4,
        img: titanium460fish__1,
        img__2: titanium460fish__2,
        img__3: titanium460fish__3,
        img__4: titanium460fish__4,
        img__5: titanium460fish__4,
        name: "TITANIUM 460 FISH",
        long: "Longueur 4,60m",
        larg: "Largeur 1,90m",
        tir: "Tirant d'eau 0,20m",
        moto: "Motorisation max 50cv",
        poid: "Poids 300kg",
        nb: "Nombre de personnes max 5",
        cat: "Catégorie C",
        equ_serie:
        "Tour de pare brise inox, volant, direction, console de pilotage, sellerie (assise arrière + dossier), échelle",
      },
      {
        id: 5,
        img: titanium460open__1 ,
        img__2: titanium460open__2,
        img__3: titanium460open__3 ,
        img__4: titanium460open__4 ,
        img__5: titanium460open__5 ,
        name: "TITANIUM 460 OPEN",
        long: "Longueur 4,60m",
        larg: "Largeur 1,84m",
        tir: "Tirant d'eau 0,20m",
        moto: "Motorisation max 50cv",
        poid: "Poids 350kg",
        nb: "Nombre de personnes max 6",
        cat: "Catégorie C",
        equ_serie:
        "Table, davier, sellerie complète cuir écologique, échelle de bain et bain de soleil (sommier + coussin), anneaux d'amarrage",
      },
      {
        id: 6,
        img: titanium520open__1 ,
        img__2: titanium520open__2,
        img__3: titanium520open__3,
        img__4: titanium520open__4,
        img__5: titanium520open__5,
        name: "TITANIUM 520 OPEN",
        long: "Longueur 5,20m",
        larg: "Largeur 2,07m",
        tir: "Tirant d'eau 0,20m",
        moto: "Motorisation max 100cv",
        poid: "Poids 500kg",
        nb: "Nombre de personnes max 6",
        cat: "Catégorie C",
        equ_serie:
        "Table, davier, sellerie complète cuir écologique, échelle de bain, bain de soleil (sommier + coussin) réservoir de carburant 70l, 2 fauteuils pilote et copilote",
      },

  {
    id: 7,
    img: titanium530open__1,
    img__2: titanium530open__2,
    img__3: titanium530open__3,
    img__4: titanium530open__4,
    img__5: titanium530open__5,
    name: "TITANIUM 530 OPEN",
    long: "Longueur 5,30m",
    larg: "Largeur 2,07m",
    tir: "Tirant d'eau 0,25m",
    moto: "Motorisation max 115cv",
    poid: "Poids 580kg",
    nb: "Nombre de personnes max 6",
    cat: "Catégorie C",
    equ_serie:
      "Réservoir carburant 60l, feux de navigation (led), coffre à batterie, 2 fauteuils, table, sellerie complète Silvertex, échelle, tour de pare-brise, console approfondie pour la version open",
  },
  {
    id: 8,
    img: titanium530s__1,
    img__2: titanium530s__2,
    img__3: titanium530s__3,
    img__4: titanium530s__4,
    img__5: titanium530s__5,
    name: "TITANIUM 530 SUNDECK",
    long: "Longueur 5,30m",
    larg: "Largeur 2,07m",
    tir: "Tirant d'eau 0,25m",
    moto: "Motorisation max 115cv",
    poid: "Poids 580kg",
    nb: "Nombre de personnes max 6",
    cat: "Catégorie C",
    equ_serie:
      "Réservoir carburant 60l, feux de navigation (led), coffre à batterie, 2 fauteuils, table, sellerie complète Silvertex, échelle, tour de pare-brise, cabine de couchage",
  },
  {
    id: 9,
    img: titanium555open__1,
    img__2: titanium555open__2,
    img__3: titanium555open__3,
    img__4: titanium555open__4,
    img__5: titanium555open__1,
    name: "TITANIUM 555 OPEN +",
    long: "Longueur 5,58m",
    larg: "Largeur 2,17m",
    tir: "Tirant d'eau 0,20m",
    moto: "Motorisation max 150cv",
    poid: "Poids 580kg",
    nb: "Nombre de personnes max 7",
    cat: "Catégorie C",
    equ_serie:
      "Table, davier, anneaux d'amarrage, sellerie complète cuir écologique, échelle de bain, bain de soleil complet, tour de pare-brise, réservoir de carburant 80l, feux de navigation et pack électrique, coupe batterie, 2 fauteuils pilote copilote, console approfondie",
  },
  {
  id: 10,
  img: titanium557__1,
  img__2: titanium557__2,
  img__3: titanium557__3,
  img__4: titanium557__4,
  img__5: titanium557__5,
  name: "TITANIUM 557 SUNDECK",
  long: "Longueur 5,57m",
  larg: "Largeur 2,20m",
  tir: "Tirant d'eau 0,20m",
  moto: "Motorisation max 150cv",
  poid: "Poids 620kg",
  nb: "Nombre de personnes max 7",
  cat: "Catégorie C",
  equ_serie:
    "Table, davier, anneaux d'amarrage, sellerie complète cuir écologique, échelle de bain, bain de soleil, tour de pare-brise, réservoir de carburant 120l, feux de navigation et pack électrique, coupe batterie, 2 fauteuils pilote copilote, coussins intérieur cabine",
},
{
    id: 11,
    img: titanium560open__1,
    img__2: titanium560open__2,
    img__3: titanium560open__3,
    img__4: titanium560open__4,
    img__5: titanium560open__5,
    name: "TITANIUM 560 OPEN",
    long: "Longueur 5,60m",
    larg: "Largeur 2,20m",
    tir: "Tirant d'eau 0,30m",
    moto: "Motorisation max 140cv",
    poid: "Poids 590kg",
    nb: "Nombre de personnes max 7",
    cat: "Catégorie C",
    equ_serie:
      "Table, davier, anneaux d'amarrage, sellerie complète cuir écologique, échelle de bain, bain de soleil (sommier + coussin) et réservoir de carburant 80l, 2 fauteuils pilote et copilote",
  },
];


const Gammes = () => {
  const [showImage, setShowImage] = useState(false);
  const [currentImage, setCurrentImage] = useState(null);


  const handleImageClick = (image) => {
    setCurrentImage(image);
    setShowImage(true);
  };

  const handleCloseImage = () => {
    setShowImage(false);
  };
  


  return (
    <section id="gammes">
      {showImage && (
        <div className="fullscreen-image"  >
          <img src={currentImage} alt="Bateaux Titanium" className={showImage ? "open" : "closed"}/>
          <button className="modal-close" onClick={handleCloseImage}><ImCross/></button>
        </div>
      )}
      <div className="gammes__title">
        <h2>Les gammes Titanium</h2>
        <div className="divider__border"></div>
      </div>
      <div className="gammes__signet">
        {data.map(
          ({
            id,
            img,
            img__2,
            img__3,
            img__4,
            img__5,
            name,
            long,
            larg,
            tir,
            moto,
            poid,
            nb,
            cat,
            equ_serie,
          }) => {
            return (
              <article key={id} className="signet">
                <div className="signet__img">
                  <a onClick={() => handleImageClick(img)} alt={name}>
                    <img src={img} alt={name} />
                  </a>
                </div>
                <div className="signet__img__little">
                  <a onClick={() => handleImageClick(img__2)} alt={name}>
                    <img src={img__2} alt={name} />
                  </a>
                  <a onClick={() => handleImageClick(img__3)} alt={name}>
                    <img src={img__3} alt={name} />
                  </a>
                  <a onClick={() => handleImageClick(img__4)} alt={name}>
                    <img src={img__4} alt={name} />
                  </a>
                  <a onClick={() => handleImageClick(img__5)} alt={name}>
                    <img src={img__5} alt={name} />
                  </a>
                </div>
                <div className="signet__content">
                  <h3>{name}</h3>
                  <div className="signet__carac">
                    <h4>Caractéristiques</h4>
                    <div className="web__divider__border"></div>
                    <ul>
                      <li>{long}</li>
                      <li>{larg}</li>
                      <li>{tir}</li>
                      <li>{moto}</li>
                      <li>{poid}</li>
                      <li>{nb}</li>
                      <li>{cat}</li>
                    </ul>
                  </div>
                  <div className="signet__info">
                    <h4>Equipements de serie</h4>
                    <div className="web__divider__border"></div>
                    <p>{equ_serie}</p>
                  </div>
                </div>
              </article>
            );
          }
        )}
      </div>
    </section>
  );
};

export default Gammes;
