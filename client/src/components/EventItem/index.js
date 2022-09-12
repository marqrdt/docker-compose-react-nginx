import React, {useState, useEffect, Fragment} from 'react';
import {
    Container,
    Row,
    Col
} from 'react-bootstrap';

import './index.scss';

const EventItem = (props) => {

  useEffect((props) => {    
  }, [])

  return(
    <Container className="event-entry">
      <div className="event-title">{props.name}</div>
      <div className="event-title">{props.date}</div>
      <div className="event-title">{props.location}</div>
      <Row className="event-content" dangerouslySetInnerHTML={{ __html: props.description}}/>
    </Container>
  )
}

export default EventItem;