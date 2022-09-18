import React from 'react';
import Container from 'react-bootstrap/Container';
import { useEffect, useState } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import '../data/ContentProvider';
import BlogEntries from "../components/BlogEntries";
import ContentProvider from "../data/ContentProvider";
import ContentHeader from "../components/ContentHeader";
import ReactDOM from "react-dom";
import './index.scss';

const Blog = () => {
    //let this_props = {name: "Stuff"}

    const contentProvider = new ContentProvider();
    useEffect(() => {
        let newElement = React.createElement(BlogEntries)
        ReactDOM.render(
                newElement,
                document.getElementById('content')
        )
    }, [])

    return(
        <Container id="heading">
            <ContentHeader text={contentProvider.getHeading({name: "blogz"})} className="content-header"/>
        </Container>
    )
}

export default Blog;
