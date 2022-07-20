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
        const pageHeight = 1900;
        const pageWidth = 1050;
        const options = {
            adjustPageHeight: 1,
            pageHeight: 1000,
            pageWidth: 1600,
            scale: 40,
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
        const chromaticNotes = ['cn', 'c#n', 'dn', 'd#n', 'en', 'fn', 'f#n', 'gn', 'g#', 'an', 'a#', 'bn', 'ccn', 'cc#', 'ddn', 'dd#', 'een', 'ffn', 'ff#n', 'ggn', 'gg#n', 'aan', 'aa#n', 'bbn'];
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
        console.log(noteString);
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
    
    return (
        <Container>
            <MelodyForm defaultValues={defaultValues} onSubmitHandler={submitHandler} onMelodyLengthChangeHandler={melodyLengthChangeHandler} onMelodyTypeChangeHandler={melodyTypeChangeHandler}/>
            <Row id="renderedMelody" dangerouslySetInnerHTML={{ __html: "<div>" + svgURL + "</div>"}}/>
        </Container>
    )
}

export default RandomMelody;