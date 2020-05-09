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
          <Stack.Screen name={MenuScreen.screenName} component={MenuScreen} />
          <Stack.Screen name={GameScreen.screenName} component={GameScreen} />
          <Stack.Screen name={SwipeScreen.screenName} component={SwipeScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </AppearanceProvider>
  )
}
