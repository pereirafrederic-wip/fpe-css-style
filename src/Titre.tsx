import * as React from "react";

const Titre = ({ style, text }) => {
  return <div className={`Titre ${style}`}>{text}</div>;
};

export default Titre;
