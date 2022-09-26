import React from 'react';
import 'bootswatch/dist/flatly/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import { Paper } from '@mui/material';
import { MDBFooter } from 'mdb-react-ui-kit';
import {useState, useEffect} from 'react';
import MainNavigation from './components/MainNavigation';
import './App.scss';
import 'animate.css';

function getRandomBGImage() {
    return "bg-image-" + Math.floor( Math.random() * 8 + 2 ).toString().padStart(2, "0");
}

function App() {
    const imageDuration = 30000;
    const [appState, setAppState] = useState([]);
    const [bgImageClass, setBgImageClass] = useState(getRandomBGImage() + ' animate__animated animate__fadeIn');
    const [updateInterval, setUpdateInterval] = useState(imageDuration);
    useEffect(() => {
        const updateImage = setInterval(() => {
            setBgImageClass(getRandomBGImage() + ' main w-100');
            //console.log(bgImageClass);
            setUpdateInterval( Math.floor( Math.random() * imageDuration + imageDuration/4 ));
        }, updateInterval);
        return () => clearInterval(updateImage);
    }, []);

    return (
        <Container fluid>
            <Paper elevation={3} className={bgImageClass}>
                <MainNavigation/>
            </Paper>
            <Paper elevation={3}>
                    <div id="content" className="content"/>
            </Paper>
            <Paper>
                <MDBFooter className="text-center text-dark bg-light footer"><strong>Paul Marquardt</strong> &#169;2022</MDBFooter>
            </Paper>
        </Container>
    );
}

export default App;
