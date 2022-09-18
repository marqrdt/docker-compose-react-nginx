import React from "react";
import { useEffect, useState } from 'react';
import './index.scss';
import RepoItem from "../RepoItem";
import ContentProvider from "../../data/ContentProvider";
import Container from "react-bootstrap/esm/Container";
import ReactDOM from "react-dom";

const RepoList = () => {

    const [repos, setRepos] = useState([]);
    const contentProvider = new ContentProvider();
    useEffect((props) => {
        setRepos(contentProvider.getRepoList());
        let index = 0;
    }, [])

    return (
        <Container className="repo-block animate__animated animate__fadeIn">
            {repos.map((repo, i) => {
                return <RepoItem key={i} repo={repo} />;
            })}
        </Container>
    )
}

export default RepoList;