import React from 'react'
import { FunctionComponent } from 'react'
import { StyleSheet } from 'react-native'

import { SchemeBackground } from '../components/schemed'

export const ScreenView: FunctionComponent = ({ children }) => (
  <SchemeBackground style={styles.container}>{children}</SchemeBackground>
)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
})
