import React, {useState, Fragment} from 'react';
import {
    Container,
    Row,
    Col
} from 'react-bootstrap';
import ContentProvider from "../../data/ContentProvider";
import {Link} from 'react-router-dom';
import BlogPost from '../BlogPost';

class BlogEntries extends React.Component {

  componentDidMount(props) {

  }

  render(props) {
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