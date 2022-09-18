import React from 'react';
import { useEffect } from 'react'
import Container from 'react-bootstrap/Container';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Col from 'react-bootstrap/Col';
import '../data/ContentProvider';
import { FcAbout } from "react-icons/all";
import Row from 'react-bootstrap/Row';
import ContentProvider from "../data/ContentProvider";
import ContentHeader from "../components/ContentHeader";
import ReactDOM from "react-dom";
import './index.scss';

class Home extends React.Component {

    componentDidMount(props) {
        let newElement = React.createElement('div', {},
        <Row>
            <Col>
                <Jumbotron fluid className="mr-auto jumbotron">
                    <h1>newscores.com</h1>
                    <div>
                        The web portal of Paul Marquardt.
                    </div>
                </Jumbotron>
            </Col>
        </Row>
        )
        ReactDOM.render(
            newElement,
            document.getElementById('content')
        )
    }

    render(props) {
        return (
            <Container id="heading">
                <Container />
            </Container>
        )
    }
}

export default Home;
