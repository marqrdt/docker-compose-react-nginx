import React from 'react';
import { useEffect, useState, useRef } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {FcAbout} from "react-icons/all";
import ReactDOM from "react-dom";
import ContentProvider from "../data/ContentProvider";
import ContentHeader from "../components/ContentHeader";
import './index.scss';
import 'animate.css';

const About = (props) => {
    const [showAbout, setShowAbout] = useState(props.show);
    const contentProvider = new ContentProvider();
    const nodeRef = useRef(null);

    useEffect(() => {
        let el = React.createElement( 'div', {},
            <Row className='mr-auto animate__animated animate__fadeIn'>
                <Col>{contentProvider.getContent({name: "about"})}</Col>
            </Row>
        )
        //setShowAbout(!showAbout); 
        ReactDOM.render(
            el,
            document.getElementById('content')
        )
    }, [contentProvider])

    return(
        <Container id="heading">
            <ContentHeader text={contentProvider.getHeading({name: "about"})} className="content-header animate__animated animate__fadeIn"/>
        </Container>
    )
}

export default About;
