import React from "react";
import MDBRow from "react-bootstrap/Row";
import MDBCol from "react-bootstrap/Col";
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import './index.scss';
import RepoItem from "../RepoItem";
import ContentProvider from "../../data/ContentProvider";
import Container from "react-bootstrap/esm/Container";
import ReactDOM from "react-dom";

class RepoList extends React.Component {

    constructor(props) {
        super(props)
    }

    componentDidMount(props) {
        const contentProvider = new ContentProvider();
        let scores = contentProvider.getRepoList();
        let index = 0;
    }

    render(props) {
        const contentProvider = new ContentProvider();
        let repos = contentProvider.getRepoList();
        let index = 0;
        return(
            <Container className="repo-block">
                {repos.map(repo => {
                    index +=1;
                    return <RepoItem key={index} repo={repo}/>;
                })}
            </Container>
        )
    }
}

export default RepoList;