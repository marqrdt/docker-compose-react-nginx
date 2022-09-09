import React, {useEffect, useState, Fragment} from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Axios from "axios"; // Import Axios or use Fetch.
import ContentProvider from "../../data/ContentProvider";
import BlogPost from '../BlogPost';


const BlogEntries = (props) => {

  const contentProvider = new ContentProvider();
  const blogz = contentProvider.getBlogList();

  useEffect(() => {
    blogz.map(entry => {
      console.log("Blog with title '" + entry.title + "' has file: " + entry.file);
      Axios(entry.file).then(res => {
        console.log("Blog with title '" + entry.title + "' has contents: " + res.data);
      })
      //fileReader.readAsText(entry.file);
      //fileReader.onload = () => {
      //  console.log("Blog with title '" + entry.title + " has content: " + fileReader.contents);
      //}
    })
  }, [blogz])

  return(
      <Container>
          {blogz.map(entry => {
            <BlogPost title={entry.title} content={entry.content} date={entry.date}/>;
          })}
      </Container>
  )
}

export default BlogEntries;