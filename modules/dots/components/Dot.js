import React from 'react';
import { StyleSheet, View, Dimensions } from 'react-native';

const styles = StyleSheet.create({
  circle: {
    position: 'absolute',
    borderRadius: 10,
    width: 20,
    height: 20,
  },
});

export default class Dot extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      bgColor: ['#778beb', '#f5cd79', '#f8a5c2'],
      screenWidth: Dimensions.get('window').width,
      screenHeight: Dimensions.get('window').height,
      x: 0,
      y: 0,
      color: '',
    };
  }

  componentWillMount() {
    this.getRandomColor();
    this.getRandomPosition();
  }

  getRandomColor() {
    const { bgColor } = this.state;

    const item = bgColor[Math.floor(Math.random() * bgColor.length)];
    this.setState({
      color: item,
    });
  }

  getRandomPosition() {
    const { screenHeight, screenWidth } = this.state;

    const xPosition = Math.floor(Math.random() * screenWidth);
    const yPosition = Math.floor(Math.random() * screenHeight);

    this.setState({
      x: xPosition,
      y: yPosition,
    });
  }

  render() {
    const { color, x, y } = this.state;

    return <View style={[styles.circle, { backgroundColor: color, left: x, top: y }]} />;
  }
}
