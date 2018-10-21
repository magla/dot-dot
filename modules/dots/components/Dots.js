import React from "react";
import { View, StyleSheet } from "react-native";
import Dot from "./Dot";

export default class Dots extends React.Component {
  constructor(props) {
    super(props);
    var dots = [];

    for (var i = 0; i < 50; i++) {
      dots.push(<Dot key={"dot-" + i} />);
    }

    this.state = {
      dots
    };
  }

  render() {
    return this.state.dots;
  }
}
