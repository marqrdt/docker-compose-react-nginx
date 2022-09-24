import React from 'react';
import { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import '../data/ContentProvider';
import { FcAbout } from "react-icons/all";
import Row from 'react-bootstrap/Row';
import ContentProvider from "../data/ContentProvider";
import ContentHeader from "../components/ContentHeader";
import ReactDOM from "react-dom";
import './index.scss';
import 'animate.css';

const Home = (props) => {

    useEffect(() => {
        let newElement = React.createElement('div', { name: "Blog stuff" },
            <Container>
                <h1>newscores.com</h1>
                <div>
                    The web portal of Paul Marquardt.
                </div>
            </Container>
        )
        ReactDOM.render(
            newElement,
            document.getElementById('content')
        )
    }, [])

    return (
        <Container id="heading">
            <Container />
        </Container>
    )
}

export default Home;
