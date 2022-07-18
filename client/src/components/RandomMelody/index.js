import React from "react";
import Col from 'react-bootstrap/Col';
import './index.scss';

class RandomMelody extends React.Component {

    constructor(props) {
        super(props)
    }

    componentDidMount(props) {

    }

    render() {
        console.log(this.props)
        return (
            <Col>Check back later for a randomly-generated melody just for you!</Col>
        )
    }
}

export default RandomMelody;