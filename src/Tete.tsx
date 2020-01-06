import * as React from "react";
import HOC from "./HOC";
import { Layout } from "antd";
import LogoRound from "./public/logo-round.png";
import Logo from "./public/logo.png";

const { Header } = Layout;
const Tete = props => {
  return (
    <Header className={`Tete ${props.style}`}>
      <img src={Logo} />
      <img src={LogoRound} />
    </Header>
  );
};

export default HOC(Tete);
