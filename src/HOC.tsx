import React from "react";
const HOC = WrappedComponent => {
  return class extends React.Component {
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

    componentDidMount() {
      //Here we can fetch the data by calling an API
      //and then set the state
      //here I have used static data
      this.setState({ name: "Michael" });
    }

    render() {
      const { styles, idStyle } = this.state;
      return (
        <div onClick={e => this.ChangeStyle()}>
          <WrappedComponent {...(this.props, this)} style={styles[idStyle]} />
        </div>
      );
    }
  };
};
export default HOC;
