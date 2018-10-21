import React from "react";
import { StyleSheet, View } from "react-native";
// Absolute path!
import Dots from "/www/dot-dot/modules/dots/components/Dots";

export default class WelcomeScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Dots />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f78fb3",
    alignItems: "center",
    justifyContent: "flex-start"
  }
});