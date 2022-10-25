import React from "react";
import './Hero.css';
import img_grid from '../images/Group77.png';

export default function Hero() {
    return (
        <div class="parent">
            <img src={img_grid} />
            <div class="experiences">
                <h1>
                    Online Experiences
                </h1>
                <p>
                    Join unique interactive activities led by one-of-a-kind hosts - all without leaving home.
                </p>
            </div>
        </div>
    )
}