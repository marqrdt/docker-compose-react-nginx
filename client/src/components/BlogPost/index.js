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
    <Container>
      <Row className="blog-title">{props.title} : {props.date}</Row>
      <Row className="blog-content">{props.content}</Row>
    </Container>
  )
}

export default BlogPost;