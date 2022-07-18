import React from "react";
import Col from 'react-bootstrap/Col';
import './index.scss';

class ScoreItem extends React.Component {

    constructor(props) {
        super(props)
    }

    componentDidMount(props) {

    }

    render() {
        console.log(this.props)
        if (this.props.score.hasOwnProperty("url")) {
            let scoreLink = this.props.score.url.replace("scores/", "");
            console.log("score name: " + scoreLink);
            return (
                <Col className="score-item"><a href={this.props.score.url} download={scoreLink}><strong>{this.props.score.title}</strong></a> ({this.props.score.year}) :: {this.props.score.description} (duration: {this.props.score.duration})</Col>
            )
        } else {
            return (
                <Col className="score-item"><strong>{this.props.score.title}</strong> ({this.props.score.year}) :: {this.props.score.description} (duration: {this.props.score.duration})</Col>
            )
        }
    }
}

export default ScoreItem;