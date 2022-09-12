import React, {useEffect, useState, Fragment} from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Axios from "axios"; // Import Axios or use Fetch.
import ContentProvider from "../../data/ContentProvider";
import BlogPost from '../BlogPost';


const BlogEntries = (props) => {
  const [children, setChildren] = useState([])
  const contentProvider = new ContentProvider();
  const blogz = contentProvider.getBlogList();
  
  
  
  function getBlogz() {
    let subChildren = [];
    Promise.all(
      blogz.map(async (entry) => {
        //console.log("Blog with title '" + entry.title + "' has file: " + entry.file);
        Axios.get(entry.file).then(res => {
          console.log("Blog with title '" + entry.title + "' has contents: " + res.data);
          subChildren.push(<BlogPost title={entry.title} content={res.data} date={entry.date}/>);
        })
      })
    )
    setChildren(subChildren);
  } 

  useEffect(() => {
    getBlogz();
    //setChildren(getBlogz());
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

export default BlogEntries;