import React from "react";
import { StyleSheet, View } from "react-native";
// This what we are trying to avoid
import Dots from "../../dots/components/Dots";

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
