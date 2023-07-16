import React, { useState, useEffect } from 'react';
import './SmallTextCard.css';


const SmallTextCard = (props) => {
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
            className={`stxcard ${isExpanded ? 'expanded' : ''}`}
            onClick={() => setIsExpanded(!isExpanded)}
        >
            <div className="stxcard__container">
                <div className="stxcard__body">
                    <h2 className="stxcard__title" >{props.title}</h2>
                    <p className="stxcard__description">{props.description}</p>
                </div>
                <button className="stxcard__btn">Add picture</button>
            </div>
        </div>
    );
};

export default SmallTextCard;

