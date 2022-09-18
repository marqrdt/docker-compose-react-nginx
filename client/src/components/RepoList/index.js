import React from "react";
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
        return(
            <Container className="repo-block">
                {repos.map((repo,i) => {
                    return <RepoItem key={i} repo={repo}/>;
                })}
            </Container>
        )
    }
}

export default RepoList;