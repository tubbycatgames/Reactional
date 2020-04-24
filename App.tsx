import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default () => (
  <View style={styles.container}>
    <Text>Reactional!</Text>
    <Text>An accessible, open-source game about reactions</Text>
    <Text>Meant for learning, guiding, and enjoyment</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
