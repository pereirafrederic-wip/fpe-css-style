import * as React from "react";
import { render } from "react-dom";
import Choose from "./Choose";

import "./styles.css";

function App() {
  return (
    <div className="App">
      <Choose />
    </div>
  );
}

const rootElement = document.getElementById("root");
render(<App />, rootElement);
