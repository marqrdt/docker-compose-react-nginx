import React, {useState, Fragment} from 'react';
import {
    Container,
    Row,
    Col
} from 'react-bootstrap';
import {Link} from 'react-router-dom';

import './index.scss';

class BlogPost extends React.Component {

  componentDidMount(props) {

  }

  render(props) {
    return(
      <Container>
        <Row className="blog-title">{this.props.entry.title}</Row>
        <Row className="blog-content">{this.props.entry.content}</Row>
      </Container>
    )
  }
}

export default BlogPost;