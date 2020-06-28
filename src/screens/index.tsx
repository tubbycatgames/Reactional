import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import { MenuScreenName, GameScreenName, SwipeScreenName } from '../consts'

import { withSchemedNav } from '../components/schemed'
import GameScreen from './game'
import MenuScreen from './menu'
import SwipeScreen from './swipe'

const Stack = createStackNavigator()

export default withSchemedNav(({ screenOptions }) => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={screenOptions}>
        <Stack.Screen name={MenuScreenName} component={MenuScreen} />
        <Stack.Screen name={GameScreenName} component={GameScreen} />
        <Stack.Screen name={SwipeScreenName} component={SwipeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  )
})
