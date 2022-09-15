import React from 'react';
import './Menu.css';

import first from '../../media/1.png';
import second from '../../media/2.png';
import third from '../../media/3.png';
import fourth from '../../media/4.png';
import fifth from '../../media/5.png';
import sixth from '../../media/6.png';

import firstRot from '../../media/1rotated.png';
import secondRot from '../../media/2rotated.png';
import thirdRot from '../../media/3rotated.png';
import fourthRot from '../../media/4rotated.png';
import fifthRot from '../../media/5rotated.png';
import sixthRot from '../../media/6rotated.png';

function Menu () {
  return (
    <section id='menuSection'>
      <div id='pizza'>
        <h2>Menü</h2>
        <ul id='pizzaPie'>
          <li><img id='one' src={first} alt='salami pizza slice'/></li>
          <li><img id='two' src={second} alt='olive pizza slice'/></li>
          <li><img id='three' src={third} alt='margarita pizza slice'/></li>
          <li><img id='four' src={fourth} alt='shrimp pizza slice'/></li>
          <li><img id='five' src={fifth} alt='mushroom pizza slice'/></li>
          <li><img id='six' src={sixth} alt='vegetarian pizza slice'/></li>
        </ul>

        <div className='details' id='margarita'>
          <h3>Margarita</h3>
          <h4>1500 .-</h4>
          <p>paradicsomszósz, mozzarella, paradicsom, oreganó</p>
        </div>

        <div className='details' id='salami'>
          <h3>Szalami</h3>
          <h4>1500 .-</h4>
          <p>mozzarella, paradicsomszósz, prémium szalámi, oreganó</p>
        </div>

        <div className='details' id='oliv'>
          <h3>Oliva</h3>
          <h4>1500 .-</h4>
          <p>tejszínes szósz, mozzarella, oliva, bazsalikom </p>
        </div>

        <div className='details' id='vegetarian'>
          <h3>Vegatariánus</h3>
          <h4>1500 .-</h4>
          <p>kalifornia paprika, zöldpaprika, cukkini, padlizsán, paradicsom</p>
        </div>

        <div className='details' id='see'>
          <h3>Tengeri</h3>
          <h4>1500 .-</h4>
          <p>pesztós alap, rák, calamari, mozzarella </p>
        </div>

        <div className='details' id='mushroom'>
          <h3>Gomba</h3>
          <h4>1500 .-</h4>
          <p>paradicsomszósz, mozzarella, gomba, oregano</p>
        </div>
      </div>

      {/* menü telefon verzió */}
      <div id='pizzaMob'>
        <h2>Menü</h2>
        <ul id='pizzaList'>
          <li>
            <img id='oneMob' src={thirdRot} alt='margarita pizza slice'/>
            <div className='details' id='margaritaMob'>
              <h3>Margarita</h3>
              <p>paradicsomszósz, mozzarella, paradicsom, oreganó</p>
              <h4>1500 .-</h4>
              <hr/>
            </div>
          </li>

          <li>
            <img id='twoMob' src={firstRot} alt='salami pizza slice'/>
            <div className='details' id='salamiMob'>
              <h3>Szalami</h3>
              <p>mozzarella, paradicsomszósz, prémium szalámi, oreganó</p>
              <h4>1500 .-</h4>
              <hr/>
            </div>
          </li>

          <li>
            <img id='threeMob' src={secondRot} alt='olive pizza slice'/>
            <div className='details' id='olivMob'>
              <h3>Oliva</h3>
              <p>tejszínes szósz, mozzarella, oliva, bazsalikom </p>
              <h4>1500 .-</h4>
              <hr/>
            </div>
          </li>

          <li>
            <img id='fourMob' src={sixthRot} alt='vegetarian pizza slice'/>
            <div className='details' id='vegetarianMob'>
              <h3>Vegatariánus</h3>
              <p>kalifornia paprika, zöldpaprika, cukkini, padlizsán, paradicsom</p>
              <h4>1500 .-</h4>
              <hr/>
            </div>
          </li>

          <li>
            <img id='fiveMob' src={fourthRot} alt='shrimp pizza slice'/>
            <div className='details' id='seeMob'>
              <h3>Tengeri</h3>
              <p>pesztós alap, rák, calamari, mozzarella </p>
              <h4>1500 .-</h4>
              <hr/>
            </div>
          </li>

          <li>
            <img id='sixMob' src={fifthRot} alt='mushroom pizza slice'/>
            <div className='details' id='mushroomMob'>
              <h3>Gomba</h3>
              <p>paradicsomszósz, mozzarella, gomba, oregano</p>
              <h4>1500 .-</h4>
              <hr/>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default Menu;
