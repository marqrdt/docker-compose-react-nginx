import React from 'react';
import { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import '../data/ContentProvider';
import ContentProvider from "../data/ContentProvider";
import ContentHeader from "../components/ContentHeader";
import EventItems from '../components/EventItems';
import ReactDOM from "react-dom";
import './index.scss';

const Events = () => {
    const contentProvider = new ContentProvider();
    useEffect((props) => {
        let newElement = React.createElement(EventItems)
        ReactDOM.render(
            newElement,
            document.getElementById('content')
        )
    }, [])

    return (
        <Container id="heading">
            <ContentHeader text={contentProvider.getHeading({ name: "events" })} className="content-header" />
        </Container>
    )
}

export default Events;
