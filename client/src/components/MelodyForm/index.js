import React from "react";
import './index.scss';
import { useState } from "react";

const MelodyForm = (props) => {

    const [melodyLength, setMelodyLength] = useState("");
    const [melodyType, setMelodyType] = useState("");

    const submitHandler = (e) => {
        e.preventDefault();
        console.log(melodyLength);
    };

    const melodyLengthChangeHandler = (event) => {
        this.props.setMelodyLength(event.target.value);
    }

    const melodyTypeChangeHandler = (event) => {
        this.props.setMelodyType(event.target.value);
    }

    return (
        <div>
        <form onSubmit={submitHandler}>
            <label className="labelElement">
                Melody Length:
                <input name="melodyLength" type="number" min="1" max="24" step="1" className="formElement" onChange={props.setMelodyLength} />
            </label>
            <label for="melodyType" className="labelElement">
                Melody Type:
                <select name="melodyType" id="melodyType" className="formElement" onChange={props.setMelodyType}>
                    <option value="diatonic">Diatonic</option>
                    <option value="chromatic">Chromatic</option>
                </select>
            </label>                
            <input type="submit" value="Generate Melody" className="submitButton"/>
        </form>
        </div>
    );
}

export default MelodyForm;