import React from 'react';
import { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import '../data/ContentProvider';
import { FcAbout } from "react-icons/all";
import ContentProvider from "../data/ContentProvider";
import ContentHeader from "../components/ContentHeader";
import Card from '../components/Card'
import ReactDOM, { render } from "react-dom";
import './index.scss';

const Fractals = () => {

    const contentProvider = new ContentProvider();
    useEffect((state) => {
        let children = []
        let artworkList = contentProvider.getArtworkList()
        Object.keys(artworkList).forEach((k, i) => {
            let imgSource = '..' + artworkList[k].path
            children.push(<Card key={k}><img src={imgSource} alt={{ k }} height={"960"} /></Card>)
        })
        let el = React.createElement('div', {},
            <Row className='mr-auto'>
                <Col>{contentProvider.getContent({ name: "fractals" })}</Col>
            </Row>
        )
        ReactDOM.render(
            el,
            document.getElementById('content')
        )
    }, [contentProvider])

    return (
        <Container id="heading">
            <ContentHeader text={contentProvider.getHeading({ name: "fractals" })} className="content-header" />
        </Container>
    )
}

export default Fractals;
