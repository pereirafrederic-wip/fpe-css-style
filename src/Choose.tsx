import * as React from "react";

export default class Choose extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      idStyle: 1,
      styles: ["style_blue", "style_yellow", "style_black", "style_green"]
    };
  }
  ChangeStyle() {
    const { idStyle, styles } = this.state;
    if (idStyle <= 0) {
      this.setState({ idStyle: styles.length - 1 });
    } else {
      this.setState({ idStyle: idStyle - 1 });
    }
  }

  render() {
    const { idStyle, styles } = this.state;
    return (
      <div>
        <div className={styles[idStyle]} onClick={e => this.ChangeStyle()}>
          {styles[idStyle]}
          {idStyle}
        </div>
        <div
          className={styles[idStyle] + "_inverse"}
          onClick={e => this.ChangeStyle()}
        >
          {styles[idStyle]}
          {idStyle}
        </div>
      </div>
    );
  }
}
