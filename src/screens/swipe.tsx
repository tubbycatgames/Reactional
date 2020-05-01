import React from 'react'
import { ScreenView } from './view'
import { MenuButton } from '../components/buttons'

const SwipeScreen = ({ navigation }: any) => {
  return (
    <ScreenView>
      <MenuButton navigate={navigation.navigate} />
    </ScreenView>
  )
}

export default SwipeScreen
