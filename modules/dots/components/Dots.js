import React from "react";
// We can leave the relative path in this case
import Dot from "./Dot";

export default class Dots extends React.Component {
  constructor(props) {
    super(props);
    const dots = [];

    for (let i = 0; i < 50; i++) {
      dots.push(<Dot key={`dot-${i}`} />);
    }

    this.state = {
      dots,
    };
  }

  render() {
    const { dots } = this.state;
    return dots;
  }
}
