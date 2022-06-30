import React from "react";
import MDBRow from "react-bootstrap/Row";
import MDBCol from "react-bootstrap/Col";

class PerformanceDashboard extends React.Component {
    render() {
        return (
            <MDBRow height={360}>
                <MDBCol className="bg-light rounded m-4 border border-dark">First Column</MDBCol>
                <MDBCol className="bg-light rounded m-4 border border-dark">Another Column</MDBCol>
            </MDBRow>
        )
    }
}

export default PerformanceDashboard;