import React from 'react';
import { StyleSheet, View } from 'react-native';
import Dots from 'dots/components/Dots';

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
