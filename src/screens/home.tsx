import React from 'react'
import { StyleSheet } from 'react-native'

import { 
  SchemeBackground, 
  SchemeSafeArea,
  SchemeText, 
} from '../components/schemed'

const HomeScreen = () => (
  <SchemeSafeArea style={styles.container} >
    <SchemeBackground style={styles.container}>
      <SchemeText>Reactional!</SchemeText>
      <SchemeText>An accessible, open-source game about reactions</SchemeText>
      <SchemeText>Meant for learning, guiding, and enjoyment</SchemeText>
    </SchemeBackground>
  </SchemeSafeArea>
)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
})

export default HomeScreen
