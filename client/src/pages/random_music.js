import React from 'react';
import Container from 'react-bootstrap/Container';
import { useState, useEffect } from "react";
import Row from 'react-bootstrap/Row';
import '../data/ContentProvider';
import ContentProvider from "../data/ContentProvider";
import ContentHeader from "../components/ContentHeader";
import MelodyForm from '../components/MelodyForm';
import axios from 'axios';
import 'verovio-humdrum';
import RandomMelody from '../components/RandomMelody';
import { getMeiPitch, getMeiPitchClass } from '../service/MusicFunctions';
import ReactDOM, { render } from "react-dom";
import './index.scss';

const RandomMusic = () => {
   
    const getProvider = () => {
        return new ContentProvider();
    }


    useEffect(() => {
        const contentProvider = new ContentProvider();
        let newElement = React.createElement(RandomMelody);
        ReactDOM.render(
                newElement,
                document.getElementById('content')
        )
    }, []);

    return(
        <div>
            <Container id="heading">
                <ContentHeader text={getProvider().getHeading({name: "random_melody"})} className="content-header"/>
            </Container>
        </div>
    )
}

export default RandomMusic;
