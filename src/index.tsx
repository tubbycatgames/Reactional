import React from 'react'
import { AppearanceProvider, useColorScheme } from 'react-native-appearance'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import GameScreen from './screens/game'
import MenuScreen from './screens/menu'
import SwipeScreen from './screens/swipe'
import {
  getHeaderBackgroundStyle,
  getPrimaryTextColor,
} from './components/colors'
import { MenuScreenName, GameScreenName, SwipeScreenName } from './consts'

const Stack = createStackNavigator()

export const App = () => {
  const colorScheme = useColorScheme()
  const screenOptions = {
    headerStyle: getHeaderBackgroundStyle(colorScheme),
    headerTintColor: getPrimaryTextColor(colorScheme),
    headerTitleStyle: {
      fontWeight: 'bold',
    },
  }

  return (
    <AppearanceProvider>
      <NavigationContainer>
        <Stack.Navigator screenOptions={screenOptions}>
          <Stack.Screen name={MenuScreenName} component={MenuScreen} />
          <Stack.Screen name={GameScreenName} component={GameScreen} />
          <Stack.Screen name={SwipeScreenName} component={SwipeScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </AppearanceProvider>
  )
}
