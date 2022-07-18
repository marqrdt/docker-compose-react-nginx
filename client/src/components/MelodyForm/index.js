import React from "react";
import './index.scss';
import { useState } from "react";

const MelodyForm = ({setProps}) => {

    const [value, setValue] = useState("");

    const submitHandler = (e) => {
        e.preventDefault();
        setProps((prevProps) => {
            return [...prevProps, value];
        })
    };


    return (
        <form onSubmit={submitHandler}>
            <label className="labelElement">
                Melody Length:
                <input name="melodyLength" type="number" value={value} min="1" max="24" step="1" className="formElement"
                    onChange={ (e) => {
                        setValue(e.target.value);
                    }} />
            </label>
            <label for="melodyType" className="labelElement">
                Melody Type:
                <select name="melodyType" id="melodyType" className="formElement">
                    <option value="diatonic">Diatonic</option>
                    <option value="chromatic">Chromatic</option>
                </select>
            </label>                
            <input type="submit" value="Generate Melody" className="submitButton"/>
        </form>
    );
}

export default MelodyForm;