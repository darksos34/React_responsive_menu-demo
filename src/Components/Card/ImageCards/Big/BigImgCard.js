import React, { useState, useEffect } from 'react';
import './BigImgCard.css';


const BigImgCard = (props) => {
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
            className={`bimgcard ${isExpanded ? 'expanded' : ''}`}
            onClick={() => setIsExpanded(!isExpanded)}
        >
            <div className="bimgcard__container">
                <div className="bimgcard__body">
                    <img className="bimgcard__image" src={props.img}  alt="404 Not found"/>
                    <h2 className="bimgcard__title" >{props.title}</h2>
                    <p className="bimgcard__description">{props.description}</p>
                </div>
                <button className="bimgcard__btn">Add picture</button>
            </div>
        </div>
    );
};

export default BigImgCard;

