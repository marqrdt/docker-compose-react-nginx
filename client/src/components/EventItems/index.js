import React, {useEffect, useState, Fragment} from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Axios from "axios"; // Import Axios or use Fetch.
import ContentProvider from "../../data/ContentProvider";
import EventItem from '../EventItem';


const EventItems = (props) => {
  const [children, setChildren] = useState([])
  const contentProvider = new ContentProvider();
  const eventz = contentProvider.getEventList();
  let subChildren = [];

  function getEventz() {
    let subChildren = [];
    eventz.map( (event) => {
      console.log("Event with name '" + event.name);
      subChildren.push(<EventItem name={event.name} description={event.description} date={event.date} location={event.location}/>);
    })
    setChildren(subChildren)
  } 

  useEffect(() => {
    getEventz();
    return () => {
      setChildren([]);
    };
  }, [])

  return(
      <Container>
          {children}
      </Container>
  )
}

export default EventItems;