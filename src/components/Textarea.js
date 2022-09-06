import React, { useState } from "react";

export default function Textarea(props) {
  const handleUpClick = () => {
    console.log("Uppercase was clicked" + text);
    let newText = text.toUpperCase();
    setText(newText);
  };
  const handleOnChange = (event) => {
    console.log("On change");
    setText(event.target.value);
  };

  const handleLowClick = () => {
    console.log("Lower case was clicked" + text);
    let newText2 = text.toLowerCase();
    setText(newText2);
  };

  const [text, setText] = useState("Enter text here");

  return (
    <>
      <div className="mb-3 container">
        <h3>{props.title}</h3>
        <br />

        <label for="exampleFormControlTextarea1" className="form-label">
          Textarea:
        </label>

        <textarea
          className="form-control"
          value={text}
          onChange={handleOnChange}
          id="exampleFormControlTextarea1"
          rows="8"
        ></textarea>

        <br />
        <button className="btn btn-primary mr" onClick={handleUpClick}>
          Uppercase
        </button>
        <button className="btn btn-primary" onClick={handleLowClick}>
          Lowercase
        </button>
      </div>

      <div className="container">
              <h4>Your text summary:</h4>
              <p>{text.split(" ").length} words <br/> {text.length} characters <br/> Time to read: {0.008 * (text.split(" ").length -1)} min</p>
      </div>

      <div className="container">
      <h4>Preview:</h4>
              <p>{text}</p>
      </div>
            
    </>
  );
}
