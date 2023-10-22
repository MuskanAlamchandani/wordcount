// shortcut (rfc)--->react function code
import React, { useState } from 'react'
export default function TextForm(props) {
    const [text, setText] = useState('Enter text here');
    const handleChange = (event) => {
        console.log("On change");
        setText(event.target.value);
    }
    return (
        <div>
            <div className="container">
                <h2>{props.heading}</h2>
                <div className="mb-3">
                    <textarea className="form-control" value={text} onChange={handleChange} ></textarea>
                </div>

            </div>
            <div className="container my-3">
                <h3>Your text summary</h3>
                <p>{text.split(" ").length} words, {text.length} charaters</p>
            </div>
            <div className="container">

            </div>
        </div>
    )
}