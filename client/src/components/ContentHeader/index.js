import React from "react";
import MDBRow from "react-bootstrap/Row";
import MDBCol from "react-bootstrap/Col";
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import './index.scss';

class ContentHeader extends React.Component {

    constructor(props) {
        super(props)
    }

    componentDidMount(props) {

    }

    render() {
        return (
            <Row>
                <Col className="bg-light rounded m-4 border border-dark">{this.props.text}</Col>
            </Row>
        )
    }
}

export default ContentHeader;