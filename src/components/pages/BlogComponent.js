import React from 'react';

export default function BlogComponent(props) {

    return (
        <div>

            <div>
                <p className="card__description">{props.description}</p></div>
        </div>
    );
}
