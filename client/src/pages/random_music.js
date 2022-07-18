import React from 'react';
import Container from 'react-bootstrap/Container';
import { useState } from "react";
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

    const [melodyLength, setMelodyLength] = useState('');
    const [melodyType, setMelodyType] = useState('');
    
    const renderNotation = (verovio, elementId, docTitle, type = "pitch-class") => {
        ///////////////////////////
        /* Create the vrvToolkit */
        ///////////////////////////
        const zoom = 50;
        const pageHeight = 1900;
        const pageWidth = 1050;
        const toolkit = new verovio.toolkit();
        const options = {
            adjustPageHeight: 1,
            pageHeight: 6000,
            pageWidth: 2500,
            scale: 40,
            font: "Leipzig"
        }
        const static_humdrum = 
            '**kern\t**kern\t**vpos\n' +
            '!bass\t!treble\t!\n' +
            '*clefF4\t*clefG2\t*\n' +
            'FFn\tryy\t-5\n' +
            '*-\t*-\t*-'
        const svgContent = toolkit.renderData(static_humdrum, options);
        //console.log(svgContent);
        return svgContent;
    }

    const getProvider = () => {
        return new ContentProvider();
    }


    const componentDidMount = (state) => {
        const verovio = require('verovio-humdrum');
        const elementId = 'content';
        const docTitle = 'Random Melody';
        const objectType = 'pitch-class';
        const scoreSvg = this.renderNotation(verovio,elementId,docTitle, "pitch-class");
        const svgBlob = new Blob([scoreSvg], { type: "image/svg+xml" });
        const svgURL = URL.createObjectURL(svgBlob);
        //let newElement = React.createElement(RandomMelody)

        //document.getElementById('content')
        //console.log(tk);
        //let newElement = React.createElement(ScoreList)
    }

    const melodyLengthChangeHandler = (value) => {
        console.log(value);
        setMelodyLength(value);
    }

    const melodyTypeChangeHandler = (value) => {
        console.log(value);
        setMelodyType(value);
    }

    return(
        <div>
            <Container id="heading">
                <ContentHeader text={getProvider().getHeading({name: "random_melody"})} className="content-header"/>
            </Container>
            <Container id="content">
                <MelodyForm onMelodyLengthChangeHandler={melodyLengthChangeHandler} onMelodyTypeChangeHandler={melodyTypeChangeHandler}/>
            </Container>
        </div>
    )
}

export default RandomMusic;
