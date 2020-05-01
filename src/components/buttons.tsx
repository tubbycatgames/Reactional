import React from 'react'
import { Button } from 'react-native'

export const MenuButton = ({ navigate }: any) => (
  <Button
    accessibilityLabel='Click to return to the Menu'
    onPress={() => navigate('Menu')}
    title='Menu'
  />
)
