import React from 'react';
import { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {FcAbout} from "react-icons/all";
import ContentProvider from "../data/ContentProvider";
import ContentHeader from "../components/ContentHeader";
import ScoreList from '../components/ScoreList'; 
import Card from '../components/Card'
import ReactDOM, { render } from "react-dom";
import './index.scss';

const MusicScores = () => {

    const contentProvider = new ContentProvider();
    useEffect(() => {
        const contentProvider = new ContentProvider();
        const scoreList = contentProvider.getScoreList()
        let newElement = React.createElement(ScoreList)
        ReactDOM.render(
                newElement,
                document.getElementById('content')
        )
        }, [])

    return(
        <Container id="heading">
            <ContentHeader text={contentProvider.getHeading({name: "music_scores"})} className="content-header"/>
        </Container>
    )
}

export default MusicScores;
