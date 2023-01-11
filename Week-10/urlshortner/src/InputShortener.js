import React, { useState } from "react";
import "./App.css";
import validator from "validator";

const InputShortener = ({ setInputvalue }) => {
  const [value, setValue] = useState("");
  const handelClick = () => {
    try {
      setInputvalue(value);
      setValue("");
    } catch (err) {
      console.log(err.message);
    }
  };
  return (
    <div className="Inputconatiner">
      <h1>
        URL <span>Shortner</span>
      </h1>
      <br></br>
      <input
        type="text"
        placeholder="place a link to shorten it"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      ></input>
      <button onClick={handelClick}>Create</button>
    </div>
  );
};

//onChange={handelInputText}
export default InputShortener;
