import React from 'react'
import { StyleSheet } from 'react-native'

import { SchemeBackground, SchemeText } from '../components/schemed'

const HomeScreen = () => (
  <SchemeBackground style={styles.container}>
    <SchemeText>Reactional!</SchemeText>
    <SchemeText>An accessible, open-source game about reactions</SchemeText>
    <SchemeText>Meant for learning, guiding, and enjoyment</SchemeText>
  </SchemeBackground>
)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
})

export default HomeScreen
