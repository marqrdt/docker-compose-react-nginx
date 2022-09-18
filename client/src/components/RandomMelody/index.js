import React from "react";
import { useState, useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import MelodyForm from "../MelodyForm";
import 'verovio-humdrum';
import './index.scss';
import { render } from "react-dom";

const RandomMelody = (props) => {

    const [melodyLength, setMelodyLength] = useState('1');
    const [melodyType, setMelodyType] = useState('diatonic');
    const [svgURL, setSVGURL] = useState('');
    const defaultValues = {
        length: "1",
        type: "diatonic"
    };

    const renderNotation = () => {
        ///////////////////////////
        /* Create the vrvToolkit */
        ///////////////////////////
        const verovio = require('verovio-humdrum');
        const toolkit = new verovio.toolkit();
        const zoom = 50;
        const pageHeight = 500;
        const pageWidth = 2000;
        const options = {
            adjustPageHeight: 1,
            pageHeight: pageHeight,
            pageWidth: pageWidth,
            scale: 50,
            font: "Leipzig"
        }
        const static_humdrum = 
            '**kern\t**kern\t**vpos\n' +
            '!bass\t!treble\t!\n' +
            '*clefF4\t*clefG2\t*\n' +
            'FFn\tryy\t-5\n' +
            '*-\t*-\t*-'
        const humdrumMelodyHeader = 
            '**kern\t**vpos\n' +
            '!treble\t!\n' +
            '*clefG2\t*\n'
        const diatonicNotes = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'aa', 'bb', 'cc', 'dd', 'ee', 'ff', 'gg'];
        const chromaticNotes = ['cnX', 'c#nX', 'dnX', 'd#nX', 'enX', 'fnX', 'f#nX', 'gnX', 'g#nX', 'anX', 'a#nX', 'bnX', 'ccnX', 'cc#X', 'ddnX', 'dd#X', 'eenX', 'ffnX', 'ff#nX', 'ggnX', 'gg#nX', 'aanX', 'aa#nX', 'bbnX'];
        let noteString = humdrumMelodyHeader;
        if ( melodyLength > 0 ) {
            for( let step = 0; step < melodyLength; step++ ){
                if ( melodyType == 'chromatic' ) {
                    let nextNote = Math.floor(Math.random() * chromaticNotes.length);
                    noteString += chromaticNotes[nextNote] + '\t-5\n';
                }
                else {
                    let nextNote = Math.floor(Math.random() * diatonicNotes.length);
                    noteString += diatonicNotes[nextNote] + '\t-5\n';
                }
            }
        }
        //console.log(noteString);
        //const svgContent = toolkit.renderData(static_humdrum, options);
        const svgContent = toolkit.renderData(noteString, options);
        const elementId = 'renderMelody';
        const docTitle = 'Random Melody';
        const objectType = 'pitch-class';
        const svgBlob = new Blob([svgContent], { type: "image/svg+xml" });
        //setSVGURL(URL.createObjectURL(svgBlob));
        setSVGURL(svgContent);
    }
    
    const submitHandler = (e) => {
        e.preventDefault();
        //console.log("Generate Melody form submitted!");
        renderNotation();
    };
    
    const melodyLengthChangeHandler = (event) => {
        //console.log("Melody length: " + event.target.value);
        setMelodyLength(event.target.value);
    }

    const melodyTypeChangeHandler = (event) => {
        //console.log("Melody type: " + event.target.value);
        setMelodyType(event.target.value);
    }
    
    return (
        <Container className="animate__animated animate__fadeIn">
            <MelodyForm defaultValues={defaultValues} onSubmitHandler={submitHandler} onMelodyLengthChangeHandler={melodyLengthChangeHandler} onMelodyTypeChangeHandler={melodyTypeChangeHandler}/>
            <Row dangerouslySetInnerHTML={{ __html: '<div id="rendered-melody">' + svgURL + '</div>'}}/>
        </Container>
    )
}

export default RandomMelody;