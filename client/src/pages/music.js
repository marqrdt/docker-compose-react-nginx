import React from 'react';
import ReactDOM from "react-dom";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import '../data/ContentProvider';
import {FcAbout} from "react-icons/all";
import ContentProvider from "../data/ContentProvider";
import ContentHeader from "../components/ContentHeader";
import "./index.scss";

class Music extends React.Component {

    componentDidMount(props) {
        const contentProvider = new ContentProvider();
        let newElement = React.createElement('div', {name: "Music stuff"},
            <Row className='mr-auto'>{contentProvider.getContent({name: "music"})}</Row>
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
                <ContentHeader text={contentProvider.getHeading({name: "music"})} className="content-header"/>
            </Container>
        )
    }
}

export default Music;
