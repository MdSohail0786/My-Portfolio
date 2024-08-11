import "./App.css";
// import { BrowserRouter, Route } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./contents/Navbar";
import First from "./contents/Frist";
import About from "./contents/About";
import Skill from "./contents/Skill";
import Project from "./contents/Project";
import Resume from "./contents/Resume";
import Contect from "./contents/Contect";

function App() {
  return (
    <>
      {/* <div className="app-container"> */}
      {/* </div> */}

      <Navbar></Navbar>

      <First></First>
      <About ref={About}></About>
      <Skill></Skill>
      <Project></Project>
      <Resume></Resume>
      <Contect></Contect>
    </>
  );
}

export default App;
