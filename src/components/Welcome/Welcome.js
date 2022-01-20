import React from 'react'
import './Welcome.css'
import halfpizza from '../../media/halfpizza.png'
import Logo from './Logo/Logo'

function Welcome() {
    return (
        <section id="welcome">
            <img id="halfPizza" src={halfpizza} alt="" />

            <div id="textWrapper">
                <Logo />
                <h1>Pizza Seekers'</h1>
            </div>
        </section>
    )
}

export default Welcome
