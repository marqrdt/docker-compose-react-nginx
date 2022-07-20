import React from "react";
import './index.scss';
import { useState, useEffect } from "react";

const MelodyForm = (props) => {

    const [melodyLength, setMelodyLength] = useState("");
    const [melodyType, setMelodyType] = useState("");
    
    useEffect(() => {
        setMelodyLength(props.defaultValues.length);
    }, [props.defaultValues.length])

    const melodyLengthChangeHandler = (event) => {
        setMelodyLength(event.target.value);
    }

    const melodyTypeChangeHandler = (event) => {
        setMelodyType(event.target.value);
    }

    return (
        <div>
        <form onSubmit={props.onSubmitHandler}>
            <label className="labelElement">
                Melody Length:
                <input name="melodyLength" defaultValue="1" type="number" min="1" max="24" step="1" className="formElement" onChange={props.onMelodyLengthChangeHandler} />
            </label>
            <label htmlFor="melodyType" className="labelElement">
                Melody Type:
                <select name="melodyType" defaultValue="diatonic" id="melodyType" className="formElement" onChange={props.onMelodyTypeChangeHandler}>
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