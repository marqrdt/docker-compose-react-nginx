import 'bootswatch/dist/flatly/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import { MDBFooter } from 'mdb-react-ui-kit';
import React, {useState} from 'react';
import MainNavigation from './components/MainNavigation';
import './App.css';

function getRandomBGImage() {
    return "bg-image-" + Math.floor( Math.random() * 6 + 2 ).toString().padStart(2, "0");
}

function App() {
    const [appState, setAppState] = useState([]);
    let classes = getRandomBGImage() + ' main w-100';
    return (
        <Container>
            <Container fluid className={ classes }>
                <MainNavigation/>
            </Container>
            <Container id="content" className='content'/>
            <MDBFooter className="text-center text-dark bg-light footer"><strong>Paul Marquardt</strong> &#169;2022</MDBFooter>
        </Container>
    );
}

export default App;
