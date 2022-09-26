import React from 'react';
import Container from 'react-bootstrap/Container';
import { useEffect, useState } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import '../data/ContentProvider';
import {FcAbout} from "react-icons/all";
import ContentProvider from "../data/ContentProvider";
import ContentHeader from "../components/ContentHeader";
import Card from '../components/Card'
import ReactDOM, { render } from "react-dom";
import './index.scss';

const Artwork = () => {
        
    const contentProvider = new ContentProvider();
    useEffect(() => {
        const artworkList = contentProvider.getArtworkList()
        let children = []
        children.push(<Container>{contentProvider.getContent({name: "artwork"})}</Container>)
        Object.keys(artworkList).forEach( (k, i) => {
            let imgSource = '..' + artworkList[k].path
            children.push(<div className=" animate__animated animate__fadeIn" key={k}><img src={imgSource} alt={{k}} height={"960"}/></div>)
        })
        let el = React.createElement( 'div', {},
            <div className='mr-auto'>{children}</div>
            )
        ReactDOM.render(
                el,
                document.getElementById('content')
        )
    }, [contentProvider])

    return(
        <Container id="heading">
            <ContentHeader text={contentProvider.getHeading({name: "artwork"})} className="content-header"/>
        </Container>
        )
}

export default Artwork;
