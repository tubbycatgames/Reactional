import React from 'react'
import { Button } from 'react-native'

import { SchemeText } from '../components/schemed'

import { ScreenView } from './view'

const MenuScreen = ({ navigation }: any) => (
  <ScreenView>
    <SchemeText>Reactional!</SchemeText>
    <SchemeText>An accessible, open-source game about reactions</SchemeText>
    <SchemeText>Meant for learning, guiding, and enjoyment</SchemeText>
    <Button
      accessibilityLabel='Click to play the Game'
      onPress={() => navigation.navigate('Game')}
      title='Play!'
    />
    <Button
      accessibilityLabel='Click to Enter the Swipatorium!'
      onPress={() => navigation.navigate('Swipe')}
      title='Swipe!'
    />
  </ScreenView>
)

export default MenuScreen
