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
      return (
      <Container id="heading">
          <div className="font-weight-bold">{props.heading}</div>
          <Row>
              <Col
                  className="bg-light rounded mr-lg-auto border border-dark">{props.content}</Col>
          </Row>
      </Container>
      )
  }
}

export default BlogPost;