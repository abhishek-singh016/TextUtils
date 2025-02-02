import React, {useState} from 'react'

function TextForm(props){

    const handleUpperCase = ()=>{
        setText(text.toUpperCase());
    }

    const handleChange = (event)=>{
        // console.log("change happened");
        setText(event.target.value);
    }

    const[text, setText] = useState("Enter your text here!!");

    return(
    <div>
        <div className="mb-3">
            <h1>{props.heading}</h1>
            <textarea className="form-control" value={text} onChange={handleChange} id="typeBox" rows="8"></textarea>
            <div>
                <button className="btn btn-primary" onClick={handleUpperCase}> Convert To Uppercase</button>
            </div>
        </div>
    </div>
    )
}

export default TextForm;