import React from "react";
import './Card.css';
import star from '../images/Star 1.png';

export default function Card(props) {
    console.log(props)
    let badgeText
    if (props.openSpots === 0) {
        badgeText = "SOLD OUT"
    } else if (props.location === "Online") {
        badgeText = "ONLINE"
    } 
    
    return (
        <div className="card">
           {
                badgeText && <div className="card--badge">
                    {badgeText}
                </div>
        }
           <img className="card--image" src={`../images/${props.img}`} alt="" />
           <div className="card--stats">
                <img className="card--star" src={star} alt="" />
                <span>{props.stats.score}</span>
                <span className="gray">({props.stats.review_count}) • </span>
                <span className="gray">{props.location}</span>
           </div>
           <p>{props.title}</p>
           <p><span className="bold">From ${props.price}</span> / person</p>
        </div>
    )
}