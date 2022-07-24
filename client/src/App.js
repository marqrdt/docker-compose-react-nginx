import 'bootswatch/dist/flatly/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import { MDBFooter } from 'mdb-react-ui-kit';
import {useState, useEffect} from 'react';
import MainNavigation from './components/MainNavigation';
import './App.css';

function getRandomBGImage() {
    return "bg-image-" + Math.floor( Math.random() * 8 + 2 ).toString().padStart(2, "0");
}

function App() {
    const [appState, setAppState] = useState([]);
    const [bgImageClass, setBgImageClass] = useState(getRandomBGImage() + ' main w-100');
    const [updateInterval, setUpdateInterval] = useState(60000);
    useEffect(() => {
        const updateImage = setInterval(() => {
            setBgImageClass(getRandomBGImage() + ' main w-100');
            //console.log(bgImageClass);
            setUpdateInterval( Math.floor( Math.random() * 60000 + 60000 ));
        }, updateInterval);
        return () => clearInterval(updateImage);
    }, []);

    return (
        <Container>
            <Container fluid className={ bgImageClass }>
                <MainNavigation/>
            </Container>
            <Container id="content" className='content'/>
            <MDBFooter className="text-center text-dark bg-light footer"><strong>Paul Marquardt</strong> &#169;2022</MDBFooter>
        </Container>
    );
}

export default App;
