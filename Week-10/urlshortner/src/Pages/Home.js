import "../App.css";
import { useState } from "react";
import InputShortener from "../InputShortener";
import LinkResult from "../LinkResult";
import Header from "../Header";

function Home() {
  const [inputValue, setInputvalue] = useState("");
  return (
    <div className="container">
      <Header></Header>
      <InputShortener setInputvalue={setInputvalue} />
      <LinkResult inputValue={inputValue}></LinkResult>
    </div>
  );
}

export default Home;
