import axios from "axios";
import { useEffect, useState } from "react";
import CopyToClipboard from "react-copy-to-clipboard";
import "./App.css";
import ErrorHandler from "./Errorhandler";
import validator from "validator";

const LinkResult = ({ inputValue }) => {
  const [shortenUrl, setShortenUrl] = useState("");
  const [copied, setCopied] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState([]);
  const [urlValid, setUrlValid] = useState(true);

  function isValidURl() {
    try {
      if (!validator.isURL(inputValue)) {
        setUrlValid(false);
        //setError(true);
        throw Error("Invalid URl");
      }
    } catch (err) {
      console.log(err.message);
    }
  }
  const fetchData = async () => {
    try {
      setLoading(true);
      const res = await axios(
        `https://api.shrtco.de/v2/shorten?url=${inputValue}`
      );
      setShortenUrl(res.data.result.full_short_link);
    } catch (err) {
      setError(true);
      var data = { ...err };
      setErrorMessage(data);
      console.log(data);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    if (inputValue.length) {
      isValidURl();
      urlValid && fetchData();
      setError(false);
      setUrlValid(true);
    }
  }, [inputValue]);

  useEffect(() => {
    setTimeout(() => {
      setCopied(false);
    }, 1000);
  }, [copied]);

  if (loading) {
    return <p className="nodata">Loading....</p>;
  }

  if (error || !urlValid) {
    return (
      <>
        <div className="errorHandler">
          You request is not fulfilled due to "
          {!urlValid ? "Invalid URl" : errorMessage.message}"
        </div>
      </>
    );
  }
  // <p className="error">Something went wrong...</p>;
  return (
    <>
      {shortenUrl && (
        <div className="results">
          <p>{shortenUrl}</p>
          <CopyToClipboard text={shortenUrl} onCopy={() => setCopied(true)}>
            <button className={copied ? "copied" : ""}>
              copy to clipboard
            </button>
          </CopyToClipboard>
        </div>
      )}
    </>
  );
};

export default LinkResult;
