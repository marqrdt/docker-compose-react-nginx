import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import '../data/ContentProvider';
import {FcAbout} from "react-icons/all";
import ContentProvider from "../data/ContentProvider";
import ContentHeader from "../components/ContentHeader";
import Card from '../components/Card'
import ReactDOM, { render } from "react-dom";
import './index.scss';

class RandomMusic extends React.Component {
        
    componentDidMount(state) {
        const Vex = require('vexflow');
        var vf = new Vex.Flow.Factory({renderer: {elementId: 'content'}});
        const score = vf.EasyScore();
        const system = vf.System();
        system.addStave({
            voices: [score.voice(score.notes('C#5/q, B4, A4, G#4'))]
        }).addClef('treble').addTimeSignature('4/4');
        ReactDOM.render(
                vf.draw(),
                document.getElementById('content')
        )
    }

    render(props) {
    const contentProvider = new ContentProvider();
    return(
        <Container id="heading">
            <ContentHeader text={contentProvider.getHeading({name: "random_melody"})} className="content-header"/>
        </Container>
        )
    }
}

export default RandomMusic;
