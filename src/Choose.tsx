import * as React from "react";

export default class Choose extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      idStyle: 1,
      styles: ["style_blue", "style_yellow", "style_black"]
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
      <div className={styles[idStyle]}>
        {styles[idStyle]}
        {idStyle}
        <button onClick={e => this.ChangeStyle()} type="button">
          change
        </button>
      </div>
    );
  }
}
