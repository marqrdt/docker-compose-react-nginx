import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import '../data/ContentProvider';
import ContentProvider from "../data/ContentProvider";
import ContentHeader from "../components/ContentHeader";
import ReactDOM from "react-dom";
import './index.scss';

class Blog extends React.Component{
    //let this_props = {name: "Stuff"}

    componentDidMount(props) {
        const contentProvider = new ContentProvider();
        let children = []
        children.push(<Col>{contentProvider.getContent({name: 'blog'})}</Col>)
        children.push(<Col>blog content 1</Col>)
        children.push(<Col>blog content 2</Col>)
        children.push(<Col>blog content 3</Col>)
    
        let newElement = React.createElement('div', {name: "Blog stuff"},
            <Row className='mr-auto'>{children}</Row>
        )
        ReactDOM.render(
            newElement,
                document.getElementById('content')
        )
    }

    render(props) {
        const contentProvider = new ContentProvider();
        return (
        <Container id="heading">
            <ContentHeader text={contentProvider.getHeading({name: "blog"})} className="content-header"/>
        </Container>
        )
    }
}

export default Blog;
