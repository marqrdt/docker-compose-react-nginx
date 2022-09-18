import React, {useState, useEffect, Fragment} from 'react';
import {
    Container,
    Row,
    Col
} from 'react-bootstrap';
import 'animate.css';

import './index.scss';

const EventItem = (props) => {

  useEffect((props) => {    
  }, [])

  return(
    <Container className="event-item animate__animated animate__fadeIn">
      <div className="event-title">{props.name}</div>
      <div className="event-title">Date: {props.date}</div>
      <div className="event-title">Location: {props.location}</div>
      <div className="event-content" dangerouslySetInnerHTML={{ __html: props.description}}/>
    </Container>
  )
}

export default EventItem;