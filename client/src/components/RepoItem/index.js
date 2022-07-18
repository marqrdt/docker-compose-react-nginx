import React from "react";
import Col from 'react-bootstrap/Col';
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
            <Col className="repo-item"><a href={this.props.repo.url} target="_blank"><strong>{this.props.repo.title}</strong></a> :: {this.props.repo.description}</Col>
        )
    }
}

export default RepoItem;