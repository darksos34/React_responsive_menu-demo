import React, { useState, useEffect } from 'react';
import './Card.css';


const Card = (props) => {
    const [isExpanded, setIsExpanded] = useState(false);

    useEffect(() => {
        const handleClick = () => {
            setIsExpanded(false);
        }
        document.addEventListener("mousedown", handleClick);
        return () => {
            document.removeEventListener("mousedown", handleClick);
        };
    }, [isExpanded]);

    return (
        <div
            className={`card ${isExpanded ? 'expanded' : ''}`}
            onClick={() => setIsExpanded(!isExpanded)}
        >
            <div className="card__container">
                <div className="card__body">
                    <img className="card__image" src={props.img}  alt="404 Not found"/>
                    <h2 className="card__title" >{props.title}</h2>
                    <p className="card__description">{props.description}</p>
                </div>
                <button className="card__btn">Add picture</button>
            </div>
        </div>
    );
};

export default Card;

