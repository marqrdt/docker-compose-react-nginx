import React, { useEffect, useState } from "react";
import Verovio from "verovio";
import MDBRow from "react-bootstrap/Row";
import MDBCol from "react-bootstrap/Col";
import MusicFunctions from "../service/MusicFunctions";
import {MDBContainer} from "mdb-react-ui-kit";
import ContentProvider from "../data/ContentProvider";

class NotationDashboard extends React.Component {

    constructor(props) {
        super(props);
    }

    renderMusic(titleData) {
        let verovio = require('verovio');
        verovio.module.onRuntimeInitialized = function () {
            /* create the toolkit instance */
            var tk = new verovio.toolkit();
            tk.setOptions({
                scale: 50,
                landscape: true,
                adjustPageWidth: false,
                evenNoteSpacing: false,
                footer: 'none'
            });
            let contentProvider = new ContentProvider();
            //fetch("/mei/PitchSequenceTest-01.mei")
            fetch("/mei/StaffTemplate-01.mei")
                .then((response) => response.text())
                .then((meiXML) => {
                    //const meiString = musicFunctions.getMeiFromTemplate( [48, 50, 52, 53], meiXML, 'Section 1 :: Test')
                    //const meiString = contentProvider.getMeiTemplate(staffData);
                    //console.log(meiString);
                    //let svg = tk.renderData(meiString, {});
                    meiXML = meiXML.replaceAll("<<titleData>>", titleData);
                    meiXML = meiXML.replaceAll("<<measureData>>", contentProvider.getStaffData);
                    //console.log(meiXML);
                    let svg = tk.renderData(meiXML, {});
                    document.getElementById("notation").innerHTML = svg;
                });
        }
    }

    render() {
        const musicFunctions = new MusicFunctions();
        const titleData = `
         <titleStmt>
                <title>Section 4 :: 1</title>
                <respStmt>
                    <persName role="Composer">Paul Marquardt</persName>
                </respStmt>
            </titleStmt>
        `;
        this.renderMusic(titleData);
        return (
            <MDBContainer>
                <MDBRow height="auto">
                    <MDBCol className="bg-light rounded m-4 border border-dark" id={"notation"}>
                    </MDBCol>
                </MDBRow>
            </MDBContainer>
        )
    }
}

export default NotationDashboard;