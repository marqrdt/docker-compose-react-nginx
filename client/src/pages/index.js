import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import '../data/ContentProvider';
import {FcAbout} from "react-icons/all";
import ContentProvider from "../data/ContentProvider";
import ContentHeader from "../components/ContentHeader";
import ReactDOM from "react-dom";
import './index.scss';

class Home extends React.Component {

    componentDidMount(props) {    
        let newElement = React.createElement('div', {name: "Blog stuff"},
            <Row className='mr-auto'></Row>
        )
        ReactDOM.render(
            newElement,
                document.getElementById('content')
        )
    }

    render(props) {
        const contentProvider = new ContentProvider();
        return(
            <Container id="heading">
                <ContentHeader text={contentProvider.getHeading({name: "home"})} className="content-header"/>
            </Container>
        )
    }
}

export default Home;
