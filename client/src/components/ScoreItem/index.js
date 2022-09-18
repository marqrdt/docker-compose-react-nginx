import React from "react";
import { useEffect, useState } from "react";
import Col from 'react-bootstrap/Col';
import './index.scss';

const ScoreItem = (props) => {

    const [scoreItem, setScoreItem] = useState(null);
    useEffect(() => {
        if (props.score.hasOwnProperty("url")) {
            let scoreLink = props.score.url.replace("scores/", "");
            console.log("score name: " + scoreLink);
            setScoreItem(<Col className="score-item"><a href={props.score.url} download={scoreLink}><strong>{props.score.title}</strong></a> ({props.score.year}) :: {props.score.description} (duration: {props.score.duration})</Col>)
        } else {
            setScoreItem(<Col className="score-item"><strong>{props.score.title}</strong> ({props.score.year}) :: {props.score.description} (duration: {props.score.duration})</Col>)
        }
        return () => {
            setScoreItem(null);
        };
    }, [props])

    return(scoreItem)
}

export default ScoreItem;