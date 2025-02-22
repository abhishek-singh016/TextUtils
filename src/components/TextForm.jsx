import React, {useState} from 'react' // useState ka use krna aaj sikha maine

function TextForm(props){

    const handleUpperCase = ()=>{
        setText(text.toUpperCase());
    }
    const handleLowerCase =()=>{
        setText(text.toLowerCase());
    }

    const handleChange = (event)=>{
        // console.log("change happened");
        setText(event.target.value);
    }

    const[text, setText] = useState("");


    const handleSpeak = () => {
        const speech = new SpeechSynthesisUtterance(text);
        speech.lang = "en-US"; // You can change the language
        speech.rate = 1; // Adjust speed (0.5 - 2)
        speech.pitch = 1; // Adjust pitch (0 - 2)
        window.speechSynthesis.speak(speech);
    };

    function handleClear(){
        setText('');
    }

    return(
    <div>
        <div className="container mb-3">
            <h1>{props.heading}</h1>
            <textarea className="form-control" placeholder='Enter Your Text Here!!' value={text} onChange={handleChange} id="typeBox" rows="8"></textarea>
            <div>
                <button className="btn btn-primary mx-1 my-1" onClick={handleUpperCase}> Convert To Uppercase</button>
                <button className="btn btn-primary mx-1 my-1" onClick={handleLowerCase}> Convert To Lowercase</button>
                <button className="btn btn-primary mx-1 my-1"  onClick={handleSpeak}>Speak</button>
                <button className="btn btn-primary mx-1 my-1"  onClick={handleClear}>Clear</button>
  
            </div>
            <div className="container my-3">
                <h2>Your text summary</h2>
                <p>{text.split(" ").length - 1} words and {text.length} characters</p>
                <p>{0.008 * text.split(" ").length} Minutes it'll take to read!!</p>
            </div>

        </div>
    </div>
    )
}

export default TextForm;