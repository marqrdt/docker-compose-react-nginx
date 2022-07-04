import React from "react";
import MDBRow from "react-bootstrap/Row";
import MDBCol from "react-bootstrap/Col";
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import './index.scss';
import ScoreItem from "../ScoreItem";
import ContentProvider from "../../data/ContentProvider";
import Container from "react-bootstrap/esm/Container";
import ReactDOM from "react-dom";

class ScoreList extends React.Component {

    constructor(props) {
        super(props)
    }

    componentDidMount(props) {
        const contentProvider = new ContentProvider();
        let scores = contentProvider.getScoreList();
        let index = 0;
        /*
        let newElement = React.createElement('div', {name: "ScoreList"},
            <Container>
                {scores.map(score => {
                        return <ScoreItem score={score}/>;
                })}
            </Container>
        )        
        return (
            ReactDOM.render(
                newElement,
                    document.getElementById('content')
            )
        )
        */
    }

    render(props) {
        const contentProvider = new ContentProvider();
        let scores = contentProvider.getScoreList();
        let index = 0;
        return(
            <Container>
                {scores.map(score => {
                    index +=1;
                    return <ScoreItem className="score-item" key={index} score={score}/>;
                })}
            </Container>
        )
    }
}

export default ScoreList;