import React, {useEffect, useState, Fragment} from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Axios from "axios"; // Import Axios or use Fetch.
import ContentProvider from "../../data/ContentProvider";
import BlogPost from '../BlogPost';


const BlogEntries = (props) => {
  const [children, setChildren] = useState([])
  const contentProvider = new ContentProvider();
  const blogz = contentProvider.getBlogList();
  let subChildren = [];

  function getBlogz() {
    let subChildren = [];
    Promise.all(
      blogz.map(async (entry,i) => {
        console.log("Blog with title '" + entry.title + "' has file: " + entry.file);
        await Axios.get(entry.file).then(res => {
          console.log("Blog with title '" + entry.title + "' has contents: " + res.data);
          return res;
        }).then(blogEntry => {
          subChildren.push(<BlogPost key={i} title={entry.title} content={blogEntry.data} date={entry.date}/>);
        });  
      })
    ).then(res => {
      setChildren(subChildren)
      console.log("Promise complete")
    })
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