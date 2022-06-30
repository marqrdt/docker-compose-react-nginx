import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import '../data/ContentProvider';
import {FcAbout} from "react-icons/all";
import RepoList from '../components/RepoList'; 
import ContentProvider from "../data/ContentProvider";
import ContentHeader from "../components/ContentHeader";
import ReactDOM from "react-dom";
import './index.scss';

class Codez extends React.Component {
    componentDidMount(props) {
        const contentProvider = new ContentProvider();
        let newElement = React.createElement(RepoList)
        ReactDOM.render(
                newElement,
                document.getElementById('content')
        )
    }

    render(props) {
        const contentProvider = new ContentProvider();
        return(
            <Container id="heading">
                <ContentHeader text={contentProvider.getHeading({name: "codez"})} className="content-header"/>
            </Container>
        )
    }

}

export default Codez;
