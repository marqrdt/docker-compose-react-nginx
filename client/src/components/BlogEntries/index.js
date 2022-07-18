import React, {useState, Fragment} from 'react';
import {
    Container,
    Row,
    Col
} from 'react-bootstrap';
import ContentProvider from "../../data/ContentProvider";
import BlogPost from '../BlogPost';

class BlogEntries extends React.Component {

  componentDidMount(props) {

  }

  render(props) {
    const contentProvider = new ContentProvider();
    let blogz = contentProvider.getBlogList();
    let index = 0;
    return(
        <Container>Coming soon: <strong>More stuff out of MA' BIG FUCKING BRAIN.</strong></Container>
    )
  }

  renderFinal(props) {
    const contentProvider = new ContentProvider();
    let blogz = contentProvider.getBlogList();
    let index = 0;
    return(
        <Container>
            {blogz.map(entry => {
                return <BlogPost key={index++} entry={entry}/>;
            })}
        </Container>
    )
  }
}

export default BlogEntries;