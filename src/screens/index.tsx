import React, { FunctionComponent } from 'react'
import { AppearanceProvider, useColorScheme } from 'react-native-appearance'
import { NavigationContainer } from '@react-navigation/native'
import {
  createStackNavigator,
  StackNavigationOptions,
} from '@react-navigation/stack'

import { MenuScreenName, GameScreenName, SwipeScreenName } from '../consts'
import {
  getHeaderBackgroundStyle,
  getPrimaryTextColor,
} from '../components/colors'

import GameScreen from './game'
import MenuScreen from './menu'
import SwipeScreen from './swipe'

const Stack = createStackNavigator()

interface Props {
  screenOptions: StackNavigationOptions
}

export type StackWrapper = FunctionComponent<Props>

export const ScreenStack: StackWrapper = ({ screenOptions }) => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={screenOptions}>
        <Stack.Screen name={MenuScreenName} component={MenuScreen} />
        <Stack.Screen name={GameScreenName} component={GameScreen} />
        <Stack.Screen name={SwipeScreenName} component={SwipeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export const withSchemedNav = (Stack: StackWrapper) => {
  return () => {
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
        <Stack screenOptions={screenOptions} />
      </AppearanceProvider>
    )
  }
}

export default withSchemedNav(ScreenStack)
