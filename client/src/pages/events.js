import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import '../data/ContentProvider';
import ContentProvider from "../data/ContentProvider";
import ContentHeader from "../components/ContentHeader";
import ReactDOM from "react-dom";
import './index.scss';

class Events extends React.Component {
    componentDidMount(props) {
        const contentProvider = new ContentProvider();
        let el = React.createElement( 'div', {},
            <Row className='mr-auto'>
                <Col>{contentProvider.getContent({name: "events"})}</Col>
            </Row>
        )
        ReactDOM.render(
                el,
                document.getElementById('content')
        )
    }

    render(props) {
        const contentProvider = new ContentProvider();
        let el = React.createElement( 'div', {},
            <Row className='mr-auto'>
                <Col>{contentProvider.getContent({name: "events"})}</Col>
            </Row>
        )
        return (
            <Container id="heading">
                <ContentHeader text={contentProvider.getHeading({name: "events"})} className="content-header"/>
            </Container>
    )
}
}

export default Events;
