import React from 'react'
import { AppearanceProvider } from 'react-native-appearance'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import GameScreen from './screens/game'
import HomeScreen from './screens/home'

const Stack = createStackNavigator()

export const App = () => (
  <AppearanceProvider>
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='Home' component={HomeScreen} />
        <Stack.Screen name='Game' component={GameScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  </AppearanceProvider>
)
