import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import '../data/ContentProvider';
import BlogEntries from "../components/BlogEntries";
import ContentProvider from "../data/ContentProvider";
import ContentHeader from "../components/ContentHeader";
import ReactDOM from "react-dom";
import './index.scss';

class Blog extends React.Component{
    //let this_props = {name: "Stuff"}

    componentDidMount(props) {
        let newElement = React.createElement(BlogEntries)
        ReactDOM.render(
                newElement,
                document.getElementById('content')
        )
    }

    render(props) {
        const contentProvider = new ContentProvider();
        return(
            <Container id="heading">
                <ContentHeader text={contentProvider.getHeading({name: "blogz"})} className="content-header"/>
            </Container>
        )
    }

}

export default Blog;
