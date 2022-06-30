import React from 'react';
import ContentProvider from "../data/ContentProvider";
import Container from "react-bootstrap/Container";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ReactDOM from "react-dom";
import ContentHeader from "../components/ContentHeader";
import { useState } from "react";
import { AiFillAlert } from 'react-icons/ai';

const SigninForm = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const handleSubmit = (event) => {
        event.preventDefault()
        alert(`You entered email: ${email}`)
    }

    return(
    <Container>
    <Row className='mr-auto'>
    <form onSubmit={handleSubmit}>
        <div>
            <input
                type="email"
                id="signinEmail"
                value={email}
                className="form-control"
                onChange={(e) => setEmail(e.target.value)}
            />
            <label className="form-label" htmlFor="form2Example1">Email address</label>
        </div>
        <div className="form-outline mr-4">
            <input
                type="password"
                id="signinPassword"
                className="form-control"
                value={password}
                onChange={(e) => setPassword(e.target.value)}/>
            <label className="form-label" htmlFor="form2Example2">Password</label>
        </div>
        <div className="row mr-4">
            <div className="col d-flex justify-content-center">
                <div className="form-check">
                    <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        id="formRememberMe"
                        checked
                    />
                    <label className="form-check-label" htmlFor="formRememberMe"> Remember me </label>
                </div>
            </div>

            <div className="col">
                <a href="/forgotpassword">Forgot password?</a>
            </div>
            <button type="submit" className="btn btn-primary btn-block mr-4">Sign in</button>
        </div>
        
    </form>
    </Row>
</Container>)

}

class Signin extends React.Component {

    componentDidMount(state) {
        ReactDOM.render(
            <SigninForm/>,
            document.getElementById('content')
            )
        }

    render(props) {
    const contentProvider = new ContentProvider();
    return (
        <Container id="heading">
            <ContentHeader text={contentProvider.getHeading({name: "signin"})} className="content-header"/>
        </Container>
    )
    }
}

export default Signin;
