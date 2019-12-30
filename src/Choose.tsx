import * as React from "react";
import HOC from "./HOC";

interface IProps {
  style: string;
}

interface IState {}

class Choose extends React.Component<IProps, IState> {
  render() {
    return (
      <div>
        <div className={this.props.style}>{this.props.style}</div>
        <div className={this.props.style + "_inverse"}>{this.props.style}</div>
      </div>
    );
  }
}
export default HOC(Choose);
