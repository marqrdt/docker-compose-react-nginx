import React from 'react';
import './Card.css'
import 'animate.css';

const Card = (props) => {
    const classes = 'bg-secondary card' + props.className;
    return <div className={classes}>{props.children}</div>;
}

export default Card;