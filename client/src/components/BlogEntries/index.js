import React, {useEffect, useState, Fragment} from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Axios from "axios"; // Import Axios or use Fetch.
import ContentProvider from "../../data/ContentProvider";
import BlogPost from '../BlogPost';


const BlogEntries = (props) => {
  const [children, setChildren] = useState([])
  const contentProvider = new ContentProvider();
  const blogz = contentProvider.getBlogList();
  //let children = [];
  let blogContent = [];

  useEffect(() => {
    let childComponents = [];
    blogz.map(entry => {
      console.log("Blog with title '" + entry.title + "' has file: " + entry.file);
      Axios(entry.file).then(res => {
        console.log("Blog with title '" + entry.title + "' has contents: " + res.data);
        childComponents.push( <BlogPost title={entry.title} content={res.data} date={entry.date}/> );
      });
    });
    setChildren(childComponents);
  }, [])

  return(
      <Container>
          {children}
      </Container>
  )
}

export default BlogEntries;