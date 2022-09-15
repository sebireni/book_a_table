import React from 'react';

import halfpizza from '../../media/halfpizza.png';
import Logo from './Logo/Logo';

import './Welcome.css';

function Welcome () {
  return (
    <section id='welcome'>
      <img id='halfPizza' src={halfpizza} alt='pizza'/>

      <div id='textWrapper'>
        <Logo/>
        <h1>Pizza Seekers'</h1>
      </div>
    </section>
  );
}

export default Welcome;
