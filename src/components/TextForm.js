import React, {useState} from 'react'

export default function TextForm(props) {
    const handleUpClick = ()=>{
        console.log("Uppercase was clicked" + text);      // text ko text access kr skte ha
        let newText = text.toUpperCase();           // .toUppperCase ye js ka function ha
        setText(newText)    
        

    }
    const handleLoClick = ()=>{
        console.log("Lower was clicked : " + text);      
        let newText = text.toLowerCase();           
        setText(newText)
    }  
    const handleClearClick = ()=>{
        console.log("Lower was clicked : " + text);      
        let newText =  ' ' ;           
        setText(newText)
    }      

    const handleOnChange = (event)=>{

        setText(event.target.value);
    }

    const handleCopy = () => {
        // console.log('I am copy');
        var text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
    }

    const handleExtraSpaces = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "))
    }



    const [text, setText] = useState(' ');
    //text = "new text"; // Wrong way to change the state 
    //setText("new text"); // Correct way to change the state
    console.log(text)
  return (
    <>
        <div className="container" style={{color: props.mode==='dark'?'white':'#070d5a'}}>
            <h1>{props.heading}</h1>
            <div className="mb-3">
              <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'grey':'white', color: props.mode==='dark'?'grey':'white'}} id="myBox" rows="8"></textarea>
            </div>
              <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to Uppercase</button>
              <button className="btn btn-primary mx-2" onClick={handleLoClick}>Convert to Lowecase</button>
              <button className="btn btn-primary mx-2" onClick={handleClearClick}>Clear</button>
              <button className="btn btn-primary mx-2" onClick={handleCopy}>Copy Text</button>
              <button className="btn btn-primary mx-2" onClick={handleExtraSpaces}>Remove Extre Spaces</button>
        </div>
        <div className="container my-3" style={{color: props.mode==='dark'?'white':'#070d5a'}}>
            <h2>Your text summary</h2>
            <p> {text.split(" ").length} words and {text.length} characters</p>
            <p>{0.008 * text.split(" ").length} Minutes read </p>  
            <h2>Preview</h2> 
            <p>{text}</p>             
        </div>
   </>
  )
}
