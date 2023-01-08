import React from 'react';
import './../pages/Pages.css';

function Card(props) {
    return (
        <div className="card__container">
            <div className="card__body">
                <img className="card__image" src={props.img}  alt="404 Not found"/>
                <h2 className="card__title" >Home sweet</h2>
                <p className="card__description">{props.description}</p>
            </div>
            <button className="card__btn">Add picture</button>
        </div>
    );
}

export default Card;
