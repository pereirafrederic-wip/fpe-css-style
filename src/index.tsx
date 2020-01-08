import * as React from "react";
import { render } from "react-dom";
import Choose from "./Choose";
import Page from "./Page";
import HOC from "./HOC";

import Tete from "./Tete";
import { Button } from "antd";

import "./styles.scss";
import "antd/dist/antd.css";

function App() {
  const content = (
    <React.Fragment>
      <Choose />
      <div>
        <Button type="primary style_blue">Primary</Button>
        <Button>Default</Button>
        <Button type="dashed">Dashed</Button>
        <Button type="danger">Danger</Button>
        <Button type="link">Link</Button>
      </div>
    </React.Fragment>
  );

  const page = (
    <Page
      header={<Tete />}
      footer={<div>footer</div>}
      slider={<div>slider</div>}
      content={content}
    />
  );

  const hocPage = HOC(page);

  return (
    <div className="App">
      <Tete />
    </div>
  );
}

const rootElement = document.getElementById("root");
render(<App />, rootElement);
