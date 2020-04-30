import React from 'react'
import { Button } from 'react-native'

import { SchemeText } from '../components/schemed'

import { ScreenView } from './view'

type Props = {
  navigation: any,
}

const HomeScreen = ({ navigation }: Props) => (
  <ScreenView>
    <SchemeText>Reactional!</SchemeText>
    <SchemeText>An accessible, open-source game about reactions</SchemeText>
    <SchemeText>Meant for learning, guiding, and enjoyment</SchemeText>
    <Button
      accessibilityLabel={'Click to play the Game'}
      onPress={() => navigation.navigate('Game')}
      title={'Play!'}
    />
  </ScreenView>
)

export default HomeScreen
