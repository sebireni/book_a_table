import React from "react";
import "./Menu.css";

import salami from "../../media/salami.png";
import olive from "../../media/olive.png";
import margarita from "../../media/margarita.png";
import seafood from "../../media/seafood.png";
import mushroom from "../../media/mushroom.png";
import vegetarian from "../../media/vegetarian.png";

import salamiRot from "../../media/salamirotated.png";
import oliveRot from "../../media/oliverotated.png";
import margaritaRot from "../../media/margaritarotated.png";
import seafoodRot from "../../media/seafoodrotated.png";
import mushroomRot from "../../media/mushroomrotated.png";
import vegetarianRot from "../../media/vegetarianrotated.png";

const Menu = () => {
  return (
    <section id="menuSection">
      <div id="pizza">
        <h2>Menü</h2>
        <ul id="pizzaPie">
          <li>
            <img id="salamiImg" src={salami} alt="salami pizza slice" />
          </li>
          <li>
            <img id="oliveImg" src={olive} alt="olive pizza slice" />
          </li>
          <li>
            <img
              id="margaritaImg"
              src={margarita}
              alt="margarita pizza slice"
            />
          </li>
          <li>
            <img id="seafoodImg" src={seafood} alt="seafood pizza slice" />
          </li>
          <li>
            <img id="mushroomImg" src={mushroom} alt="mushroom pizza slice" />
          </li>
          <li>
            <img
              id="vegetarianImg"
              src={vegetarian}
              alt="vegetarian pizza slice"
            />
          </li>
        </ul>

        <div className="details" id="margaritaDetails">
          <h3>Margarita</h3>
          <h4>1500 .-</h4>
          <p>paradicsomszósz, mozzarella, paradicsom, oreganó</p>
        </div>

        <div className="details" id="salamiDetails">
          <h3>Szalami</h3>
          <h4>1500 .-</h4>
          <p>mozzarella, paradicsomszósz, prémium szalámi, oreganó</p>
        </div>

        <div className="details" id="oliveDetails">
          <h3>Oliva</h3>
          <h4>1500 .-</h4>
          <p>tejszínes szósz, mozzarella, oliva, bazsalikom </p>
        </div>

        <div className="details" id="vegetarianDetails">
          <h3>Vegatariánus</h3>
          <h4>1500 .-</h4>
          <p>kalifornia paprika, zöldpaprika, cukkini, padlizsán, paradicsom</p>
        </div>

        <div className="details" id="seafoodDetails">
          <h3>Tengeri</h3>
          <h4>1500 .-</h4>
          <p>pesztós alap, rák, calamari, mozzarella </p>
        </div>

        <div className="details" id="mushroomDetails">
          <h3>Gomba</h3>
          <h4>1500 .-</h4>
          <p>paradicsomszósz, mozzarella, gomba, oregano</p>
        </div>
      </div>

      {/* menu for mobile */}
      <div id="pizzaMob">
        <h2>Menü</h2>
        <ul id="pizzaList">
          <li>
            <img id="oneMob" src={margaritaRot} alt="margarita pizza slice" />
            <div className="details" id="margaritaMob">
              <h3>Margarita</h3>
              <p>paradicsomszósz, mozzarella, paradicsom, oreganó</p>
              <h4>1500 .-</h4>
              <hr />
            </div>
          </li>

          <li>
            <img id="twoMob" src={salamiRot} alt="salami pizza slice" />
            <div className="details" id="salamiMob">
              <h3>Szalami</h3>
              <p>mozzarella, paradicsomszósz, prémium szalámi, oreganó</p>
              <h4>1500 .-</h4>
              <hr />
            </div>
          </li>

          <li>
            <img id="threeMob" src={oliveRot} alt="olive pizza slice" />
            <div className="details" id="olivMob">
              <h3>Oliva</h3>
              <p>tejszínes szósz, mozzarella, oliva, bazsalikom </p>
              <h4>1500 .-</h4>
              <hr />
            </div>
          </li>

          <li>
            <img
              id="fourMob"
              src={vegetarianRot}
              alt="vegetarian pizza slice"
            />
            <div className="details" id="vegetarianMob">
              <h3>Vegatariánus</h3>
              <p>
                kalifornia paprika, zöldpaprika, cukkini, padlizsán, paradicsom
              </p>
              <h4>1500 .-</h4>
              <hr />
            </div>
          </li>

          <li>
            <img id="fiveMob" src={seafoodRot} alt="seafood pizza slice" />
            <div className="details" id="seaMob">
              <h3>Tengeri</h3>
              <p>pesztós alap, rák, calamari, mozzarella</p>
              <h4>1500 .-</h4>
              <hr />
            </div>
          </li>

          <li>
            <img id="sixMob" src={mushroomRot} alt="mushroom pizza slice" />
            <div className="details" id="mushroomMob">
              <h3>Gomba</h3>
              <p>paradicsomszósz, mozzarella, gomba, oregano</p>
              <h4>1500 .-</h4>
              <hr />
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Menu;
