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

    const [melodyLength, setMelodyLength] = useState('');
    const [melodyType, setMelodyType] = useState('');
    const [svgURL, setSVGURL] = useState('');
    
    const renderNotation = () => {
        ///////////////////////////
        /* Create the vrvToolkit */
        ///////////////////////////
        const verovio = require('verovio-humdrum');
        const toolkit = new verovio.toolkit();
        const zoom = 50;
        const pageHeight = 1900;
        const pageWidth = 1050;
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
        const elementId = 'randomMelody';
        const docTitle = 'Random Melody';
        const objectType = 'pitch-class';
        const svgBlob = new Blob([svgContent], { type: "image/svg+xml" });
        setSVGURL(svgContent);
        //setSVGURL(URL.createObjectURL(svgBlob));
    }

    const getProvider = () => {
        return new ContentProvider();
    }


    useEffect(() => {

    }, []);

    const submitHandler = (e) => {
        e.preventDefault();
        console.log("Generate Melody form submitted!");
        renderNotation();
    };
    
    const melodyLengthChangeHandler = (event) => {
        console.log("Melody length: " + event.target.value);
        setMelodyLength(event.target.value);
    }

    const melodyTypeChangeHandler = (event) => {
        console.log("Melody type: " + event.target.value);
        setMelodyType(event.target.value);
    }

    return(
        <div>
            <Container id="heading">
                <ContentHeader text={getProvider().getHeading({name: "random_melody"})} className="content-header"/>
            </Container>
            <Container id="content">
                <MelodyForm onSubmitHandler={submitHandler} onMelodyLengthChangeHandler={melodyLengthChangeHandler} onMelodyTypeChangeHandler={melodyTypeChangeHandler}/>
                <RandomMelody svgURL={svgURL}/>
            </Container>
        </div>
    )
}

export default RandomMusic;
