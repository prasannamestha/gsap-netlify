import React from "react";
import ReactDOM from "react-dom";
import Loader from "./loader";

import "./styles.css";

function App() {
  return (
    <div className="App">
      <Loader />
      <br />
      <br />
      <br />
      <p>Example provided by <a href="https://privjs.com">privjs.com | Buy & sell NPM packages</a></p>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
