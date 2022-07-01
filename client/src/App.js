import 'bootswatch/dist/flatly/bootstrap.min.css';
import ReactDOM from "react-dom";
import Container from 'react-bootstrap/Container';
import { MDBFooter } from 'mdb-react-ui-kit';
import React, {useState} from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import MainNavigation from './components/MainNavigation';
import './App.css';

function App() {
    return (
        <Container className="fluid bg-dark main">
            <Container size="lg" fluid className="bg-dark bg-image main">
                <MainNavigation/>
            </Container>
            <Container id="content" className='bg-dark content'/>
            <MDBFooter>Paul Marquardt</MDBFooter>
        </Container>
    );
}

export default App;
