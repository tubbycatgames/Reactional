import React from 'react'
import { Button, StyleSheet } from 'react-native'
import { StackNavigationProp } from '@react-navigation/stack'

import { 
  SchemeBackground, 
  SchemeSafeArea,
  SchemeText, 
} from '../components/schemed'

type Props = {
  navigation: any,
}

const HomeScreen = ({ navigation }: Props) => (
  <SchemeSafeArea style={styles.container} >
    <SchemeBackground style={styles.container}>
      <SchemeText>Reactional!</SchemeText>
      <SchemeText>An accessible, open-source game about reactions</SchemeText>
      <SchemeText>Meant for learning, guiding, and enjoyment</SchemeText>
      <Button
        accessibilityLabel={'Click to play the Game'}
        onPress={() => navigation.navigate('Game')}
        title={'Play!'}
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

export default HomeScreen
