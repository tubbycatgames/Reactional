import React from 'react'
import { FunctionComponent } from 'react'
import { StyleSheet } from 'react-native'

import { SchemeBackground, SchemeSafeArea } from '../components/schemed'

export const ScreenView: FunctionComponent = ({ children }) => {
  return (
    <SchemeSafeArea style={styles.container}>
      <SchemeBackground style={styles.container}>{children}</SchemeBackground>
    </SchemeSafeArea>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
})
