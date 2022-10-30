import React from "react";
import './Card.css';
import star from '../images/Star 1.png';

export default function Card(props) {
    return (
        <div className="card">
           <img className="card--image" src={`../images/${props.img}`} alt="" />
           <div className="card--stats">
                <img className="card--star" src={star} alt="" />
                <span>{props.score}</span>
                <span className="gray">({props.review_count}) • </span>
                <span className="gray">{props.country}</span>
           </div>
           <p>{props.title}</p>
           <p><span className="bold">From ${props.price}</span> / person</p>
        </div>
    )
}