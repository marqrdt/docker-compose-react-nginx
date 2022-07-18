import React from "react";
import MDBRow from "react-bootstrap/Row";
import MDBCol from "react-bootstrap/Col";
//import Col from 'react-bootstrap/Col';
import { Container, Col, Row } from "react-bootstrap";
//import Row from 'react-bootstrap/Row';
import './index.scss';

class ContentHeader extends React.Component {

    constructor(props) {
        super(props)
    }

    componentDidMount(props) {

    }

    render() {
        return (
            <Container>
            <Row>
                <Col className="bg-light rounded m-4 border border-dark">{this.props.text}</Col>
            </Row>
            </Container>
        )
    }
}

export default ContentHeader;