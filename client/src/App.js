import 'bootswatch/dist/flatly/bootstrap.min.css';
import ReactDOM from "react-dom";
import Container from 'react-bootstrap/Container';

import React, {useState} from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import MainNavigation from './components/MainNavigation';
import './App.css';

function App() {
    return (
        <div className="main bg-dark">
            <Container size="lg" fluid className="bg-dark bg-image">
                <MainNavigation/>
            </Container>

            <Container id="content" className='bg-dark content'/>
            <div class="footer">Paul Marquardt</div>
        </div>
    );
}

export default App;
