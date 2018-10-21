import React from "react";
import { StyleSheet, View, Dimensions } from "react-native";

export default class Dot extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      bgColor: ["#778beb", "#f5cd79", "#f8a5c2"],
      screenWidth: Dimensions.get("window").width,
      screenHeight: Dimensions.get("window").height,
      x: 0,
      y: 0,
      color: ""
    };
  }

  componentWillMount() {
    this._getRandomColor();
    this._getRandomPosition();
  }

  _getRandomColor() {
    var item = this.state.bgColor[
      Math.floor(Math.random() * this.state.bgColor.length)
    ];
    this.setState({
      color: item
    });
  }

  _getRandomPosition() {
    var xPosition = Math.floor(Math.random() * this.state.screenWidth);
    var yPosition = Math.floor(Math.random() * this.state.screenHeight);

    this.setState({
      x: xPosition,
      y: yPosition
    });
  }

  render() {
    const { color, x, y } = this.state;

    return (
      <View
        style={[styles.circle, { backgroundColor: color, left: x, top: y }]}
      />
    );
  }
}

const styles = StyleSheet.create({
  circle: {
    position: "absolute",
    borderRadius: 10,
    width: 20,
    height: 20
  }
});
