import React from "react";
import { StyleSheet, View } from "react-native";
// Absolute path!
import Dots from "/www/dot-dot/modules/dots/components/Dots";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f78fb3',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
});

export default function WelcomeScreen() {
  return (
    <View style={styles.container}>
      <Dots />
    </View>
  );
}
