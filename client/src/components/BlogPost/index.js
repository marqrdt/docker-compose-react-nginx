import React, {useState, useEffect, Fragment} from 'react';
import {
    Container,
    Row,
    Col
} from 'react-bootstrap';

import './index.scss';

const BlogPost = (props) => {

  useEffect((props) => {    
  }, [])

  return(
    <Container className="blog-entry">
      <Row className="blog-title">{props.title} :: {props.date}</Row>
      <Row className="blog-content" dangerouslySetInnerHTML={{ __html: props.content}}/>
    </Container>
  )
}

export default BlogPost;