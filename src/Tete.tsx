import * as React from "react";
import { Layout } from "antd";

import HOC from "./HOC";
import Titre from "./Titre";

import LogoRound from "./public/logo-round.png";
import Logo from "./public/logo.png";

const { Header } = Layout;
const Tete = props => {
  return (
    <Header className={`Tete ${props.style}`}>
      <img src={Logo} alt="logo" />
      <img src={LogoRound} alt="logo-round" />
      <Titre text={"GrapIdee"} style={props.style} />
    </Header>
  );
};

export default HOC(Tete);
