import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {FcAbout} from "react-icons/all";
import ReactDOM from "react-dom";
import ContentProvider from "../data/ContentProvider";
import ContentHeader from "../components/ContentHeader";
import './index.scss';

class About extends React.Component {

    componentDidMount(state) {
        const contentProvider = new ContentProvider();
        let el = React.createElement( 'div', {},
        <Row className='mr-auto'>
            <Col>{contentProvider.getContent({name: "about"})}</Col>
        </Row>
        )
    ReactDOM.render(
            el,
            document.getElementById('content')
    )
    }

    render() {
        const contentProvider = new ContentProvider();
        return(
            <Container id="heading">
                <ContentHeader text={contentProvider.getHeading({name: "about"})} className="content-header"/>
            </Container>
        )
    }
}

export default About;
