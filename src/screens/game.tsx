import React from 'react'
import { Button } from 'react-native'

import { SchemeText } from '../components/schemed'

import { ScreenView } from './view'
import { MenuButton } from '../components/buttons'

const GameScreen = ({ navigation }: any) => (
  <ScreenView>
    <SchemeText>In Progress!</SchemeText>
    <MenuButton navigate={navigation.navigate} />
  </ScreenView>
)

export default GameScreen
