import React from "react";
import "./Menu.css";

import salami from "../../assets/images/salami.png";
import olive from "../../assets/images/olive.png";
import margarita from "../../assets/images/margarita.png";
import seafood from "../../assets/images/seafood.png";
import mushroom from "../../assets/images/mushroom.png";
import vegetarian from "../../assets/images/vegetarian.png";

import salamiRot from "../../assets/images/salamirotated.png";
import oliveRot from "../../assets/images/oliverotated.png";
import margaritaRot from "../../assets/images/margaritarotated.png";
import seafoodRot from "../../assets/images/seafoodrotated.png";
import mushroomRot from "../../assets/images/mushroomrotated.png";
import vegetarianRot from "../../assets/images/vegetarianrotated.png";

const Menu = () => {
  return (
    <section className="menuSection">
      <div className="pizza">
        <h2>Menü</h2>
        <ul className="pizzaPie">
          <li>
            <img className="salamiImg" src={salami} alt="salami pizza slice" />
          </li>
          <li>
            <img className="oliveImg" src={olive} alt="olive pizza slice" />
          </li>
          <li>
            <img
              className="margaritaImg"
              src={margarita}
              alt="margarita pizza slice"
            />
          </li>
          <li>
            <img
              className="seafoodImg"
              src={seafood}
              alt="seafood pizza slice"
            />
          </li>
          <li>
            <img
              className="mushroomImg"
              src={mushroom}
              alt="mushroom pizza slice"
            />
          </li>
          <li>
            <img
              className="vegetarianImg"
              src={vegetarian}
              alt="vegetarian pizza slice"
            />
          </li>
        </ul>

        <div className="details margaritaDetails">
          <h3>Margarita</h3>
          <h4>1500 .-</h4>
          <p>paradicsomszósz, mozzarella, paradicsom, oreganó</p>
        </div>

        <div className="details salamiDetails">
          <h3>Szalami</h3>
          <h4>1500 .-</h4>
          <p>mozzarella, paradicsomszósz, prémium szalámi, oreganó</p>
        </div>

        <div className="details oliveDetails">
          <h3>Oliva</h3>
          <h4>1500 .-</h4>
          <p>tejszínes szósz, mozzarella, oliva, bazsalikom </p>
        </div>

        <div className="details vegetarianDetails">
          <h3>Vegatariánus</h3>
          <h4>1500 .-</h4>
          <p>kalifornia paprika, zöldpaprika, cukkini, padlizsán, paradicsom</p>
        </div>

        <div className="details seafoodDetails">
          <h3>Tengeri</h3>
          <h4>1500 .-</h4>
          <p>pesztós alap, rák, calamari, mozzarella </p>
        </div>

        <div className="details mushroomDetails">
          <h3>Gomba</h3>
          <h4>1500 .-</h4>
          <p>paradicsomszósz, mozzarella, gomba, oregano</p>
        </div>
      </div>

      {/* menu for mobile */}
      <div className="pizzaMob">
        <h2>Menü</h2>
        <ul className="pizzaList">
          <li>
            <img
              className="oneMob"
              src={margaritaRot}
              alt="margarita pizza slice"
            />
            <div className="details margaritaMob">
              <h3>Margarita</h3>
              <p>paradicsomszósz, mozzarella, paradicsom, oreganó</p>
              <h4>1500 .-</h4>
              <hr />
            </div>
          </li>

          <li>
            <img className="twoMob" src={salamiRot} alt="salami pizza slice" />
            <div className="details salamiMob">
              <h3>Szalami</h3>
              <p>mozzarella, paradicsomszósz, prémium szalámi, oreganó</p>
              <h4>1500 .-</h4>
              <hr />
            </div>
          </li>

          <li>
            <img className="threeMob" src={oliveRot} alt="olive pizza slice" />
            <div className="details olivMob">
              <h3>Oliva</h3>
              <p>tejszínes szósz, mozzarella, oliva, bazsalikom </p>
              <h4>1500 .-</h4>
              <hr />
            </div>
          </li>

          <li>
            <img
              className="fourMob"
              src={vegetarianRot}
              alt="vegetarian pizza slice"
            />
            <div className="details vegetarianMob">
              <h3>Vegatariánus</h3>
              <p>
                kalifornia paprika, zöldpaprika, cukkini, padlizsán, paradicsom
              </p>
              <h4>1500 .-</h4>
              <hr />
            </div>
          </li>

          <li>
            <img
              className="fiveMob"
              src={seafoodRot}
              alt="seafood pizza slice"
            />
            <div className="details seaMob">
              <h3>Tengeri</h3>
              <p>pesztós alap, rák, calamari, mozzarella</p>
              <h4>1500 .-</h4>
              <hr />
            </div>
          </li>

          <li>
            <img
              className="sixMob"
              src={mushroomRot}
              alt="mushroom pizza slice"
            />
            <div className="details mushroomMob">
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
