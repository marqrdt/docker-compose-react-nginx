import React from "react";
import MDBRow from "react-bootstrap/Row";
import MDBCol from "react-bootstrap/Col";
import Col from 'react-bootstrap/Col';
import {Link} from 'react-router-dom';
import Row from 'react-bootstrap/Row';
import './index.scss';

class RepoItem extends React.Component {

    constructor(props) {
        super(props)
    }

    componentDidMount(props) {

    }

    render() {
        console.log(this.props)
        return (
            <Col className="repo-item"><a href={this.props.repo.url}><strong>{this.props.repo.title}</strong></a> :: {this.props.repo.description}</Col>
        )
    }
}

export default RepoItem;