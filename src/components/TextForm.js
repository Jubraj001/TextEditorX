import React, { useState } from "react";

export default function TextForm(props) {
  const [text, setText] = useState("Enter text here");

  const onUClickHandler = () => {
    let newtext = text.toUpperCase();
    setText(newtext);
    props.showAlert("Converted to Uppercase", "success");
  };
  const onLClickHandler = () => {
    let newtext = text.toLowerCase();
    setText(newtext);
    props.showAlert("Converted to Lowercase", "success");
  };
  const onClearClickHandler = () => {
    setText("");
    props.showAlert("Text Cleared", "success");
  };
  const onCopyClickHandler = () => {
    navigator.clipboard.writeText(text);
    props.showAlert("Text Copied", "success");
  };

  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  return (
    <>
      <div className="container">
        <div className="mb-3 my-3">
          <label htmlFor="exampleFormControlTextarea1" className="form-label">
            {props.heading}
          </label>
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange}
            d="exampleFormControlTextarea1"
            rows="8"
            style={{
              color: props.mode === "dark" ? "white" : "black",
              backgroundColor:
                props.mode === "dark" ? "rgb(40 88 86 / 17%)" : "white",
            }}
          ></textarea>
        </div>
        <button
          disabled={text.length === 0}
          className="btn btn-primary"
          onClick={onUClickHandler}
        >
          Convert to Uppercase
        </button>
        <button
          disabled={text.length === 0}
          className="btn btn-primary mx-1"
          onClick={onLClickHandler}
        >
          Convert to Lowercase
        </button>
        <button
          disabled={text.length === 0}
          className="btn btn-primary mx-1"
          onClick={onClearClickHandler}
        >
          Clear Text
        </button>
        <button
          disabled={text.length === 0}
          className="btn btn-primary mx-1"
          onClick={onCopyClickHandler}
        >
          Copy Text
        </button>
      </div>
      <div
        className="container my-3"
        style={{ color: props.mode === "dark" ? "white" : "#042743" }}
      >
        <h3>Your text summary</h3>
        <p>
          {
            text.split(/\s+/).filter((element) => {
              return element.length !== 0;
            }).length
          }{" "}
          words and {text.length} characters
        </p>
        <p>
          {0.008 *
            text.split(/\s+/).filter((element) => {
              return element.length !== 0;
            }).length}{" "}
          minutes read
        </p>
        <h4>Preview</h4>
        <p>{text.length === 0 ? "Nothing to preview" : text}</p>
      </div>
    </>
  );
}
