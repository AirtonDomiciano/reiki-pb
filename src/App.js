import React from "react";
import Carousel from "./components/carousel";
import "./App.css";
import resumeData from "./context/context";

const App = () => {
  return (
    <div className="App">
      <header>
        <nav>
          {/* <a href="#">Home</a> */}
          {/* <a href="#">Contacts</a> */}
          {/* <a href="#">Info</a> */}
        </nav>
      </header>
      <Carousel resumeData={resumeData} />
    </div>
  );
};

export default App;
