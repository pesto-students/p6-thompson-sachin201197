import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Pricing from "./Pages/Pricing";
import Feature from "./Pages/Feature";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";

function App() {
  // const [inputValue, setInputvalue] = useState("");
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/about-us" element={<About />} />
          <Route path="/feature" element={<Feature />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/login" element={<Login />} />
          <Route path="/sign-up" element={<Signup />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
