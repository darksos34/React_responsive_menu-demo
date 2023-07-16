import React, { useState, useEffect } from 'react';
import './BIgTextCard.css';

import JsonData from "../../../../data.json";
const BigTextCard = (props) => {
    const [isExpanded, setIsExpanded] = useState(false);
    const DisplayData=JsonData.map(
        (info)=>{
            return(
                <tr>
                    <td className={"btxcard__textcard"}>{info.id}</td>
                    <td>{info.description}</td>
                    <td>{info.name}</td>
                </tr>
            )
        }
    )
    useEffect(() => {
        const handleClick = () => {
            setIsExpanded(false);
        }
        document.addEventListener("mousedown", handleClick);
        return () => {
            document.removeEventListener("mousedown", handleClick);
        };
    }, [isExpanded]);
    // TODO Create a component that adjust to the correct resolution of the device
    // Create a card where you can write as admin, and as member can only give feedback to the comments
    return (
        <div
            className={`btxcard ${isExpanded ? 'expanded' : ''}`}
            onClick={() => setIsExpanded(!isExpanded)}
        >
            <div className="btxcard__container">
                <div className="btxcard__body">
                    <h2 className="btxcard__title" >{props.title}</h2>
                    <p className="btxcard__description">{props.description}</p>
                </div>


                <h4 className={"btxcard__text"}>{props.text}
                    {DisplayData}
                </h4>
                <button className="btxcard__btn">Add picture</button>
            </div>
        </div>
    );
};

export default BigTextCard;

