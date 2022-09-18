import React from "react";
import Col from 'react-bootstrap/Col';
import './index.scss';

const RepoItem = (props) => {

    return (
        <Col className="repo-item"><a href={props.repo.url} target="_blank"><strong>{props.repo.title}</strong></a> :: {props.repo.description}</Col>
    )
}

export default RepoItem;