import React from "react";
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
        return(
            <Container className="animate__animated animate__fadeIn">
                {scores.map((score,i) => {
                    return <ScoreItem className="score-item" key={i} score={score}/>;
                })}
            </Container>
        )
    }
}

export default ScoreList;