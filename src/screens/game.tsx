import React from 'react'

import { MenuButton } from '../components/buttons'
import { SchemeText } from '../components/schemed'

import { ScreenView } from './view'

const GameScreen = ({ navigation }: any) => (
  <ScreenView>
    <SchemeText>In Progress!</SchemeText>
    <MenuButton navigate={navigation.navigate} />
  </ScreenView>
)

export default GameScreen
