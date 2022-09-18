import React from 'react';
import { useState, useEffect } from 'react';
import ReactDOM from "react-dom";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import '../data/ContentProvider';
import { FcAbout } from "react-icons/all";
import ContentProvider from "../data/ContentProvider";
import ContentHeader from "../components/ContentHeader";
import "./index.scss";
import 'animate.css';

const Music = () => {

    const contentProvider = new ContentProvider();
    useState((props) => {
        let newElement = React.createElement('div', { name: "Music stuff" },
            <Row className='mr-auto animate__animated animate__fadeIn'>{contentProvider.getContent({ name: "music" })}</Row>
        )
        ReactDOM.render(
            newElement,
            document.getElementById('content')
        )
    }, [])

    return (
        <Container id="heading">
            <ContentHeader text={contentProvider.getHeading({ name: "music" })} className="content-header" />
        </Container>
    )
}

export default Music;
