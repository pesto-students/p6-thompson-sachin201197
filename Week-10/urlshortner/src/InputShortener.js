import React, { useEffect, useRef, useState } from "react";
import "./App.css";
import validator from "validator";
import debounce from "lodash";

const InputShortener = ({ setInputvalue }) => {
  const [value, setValue] = useState("");
  const [isURLValid, setURLValid] = useState(true);
  const handelClick = () => {
    try {
      setInputvalue(value);
      setValue("");
    } catch (err) {
      console.log(err.message);
    }
  };
  const URLValidator = (URL) => {
    const regex = new RegExp(
      "(https?://)?([\\da-z.-]+)\\.([a-z.]{2,6})[/\\w .-]*/?"
    );
    return regex.test(URL);
  };
  const Onchange = (e) => {
    setValue(e.target.value);
  };
  let curValue = useRef(value);
  useEffect(() => {
    setTimeout(() => {
      setURLValid(true);
    }, 5000);
    //setURLValid(URLValidator(value));
  }, [value]);

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
        onChange={Onchange}
      ></input>
      <button onClick={handelClick} disabled={!isURLValid}>
        Create
      </button>
      {!isURLValid && <p>Invalid URL</p>}
    </div>
  );
};

//onChange={handelInputText}
export default InputShortener;
