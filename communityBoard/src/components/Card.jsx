import React from "react";

const Card = (props) => {


    return (
        <div className = "displayCard">
            <img src = {props.image} alt = {props.alt}/>
            <h2>{props.title}</h2>
            <p>{props.description}</p>
            <a href = {props.link}>
            <button>{props.validate}</button>
            </a>
        </div>
    )
}

export default Card;