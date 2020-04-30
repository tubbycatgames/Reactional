import React from 'react'
import { StackNavigationProp } from '@react-navigation/stack'
import { Button, StyleSheet } from 'react-native'

import { 
  SchemeBackground, 
  SchemeSafeArea,
  SchemeText, 
} from '../components/schemed'

type Props = {
  navigation: any,
}

const GameScreen = ({ navigation }: Props) => (
  <SchemeSafeArea style={styles.container} >
    <SchemeBackground style={styles.container}>
      <SchemeText>In Progress!</SchemeText>
      <Button
        accessibilityLabel={'Click to return Home'}
        onPress={navigation.goBack}
        title={'Go Home'}
      />
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

export default GameScreen
