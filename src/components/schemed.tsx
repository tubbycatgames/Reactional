import React, { ComponentType, FunctionComponent } from 'react'
import { AppearanceProvider, useColorScheme } from 'react-native-appearance'
import { Button, Text, View } from 'react-native'
import { StackNavigationOptions } from '@react-navigation/stack'

import {
  getBackgroundStyle,
  getHeaderBackgroundStyle,
  getPrimaryButtonColor,
  getPrimaryTextColor,
  getPrimaryTextStyle,
} from './colors'

export const withSchemedStyle = (
  Wrapped: ComponentType,
  getStyle: Function
) => (props: any) => (
  <Wrapped {...props} style={[getStyle(useColorScheme()), props.style]} />
)

export const SchemeText = withSchemedStyle(Text, getPrimaryTextStyle)
export const SchemeBackground = withSchemedStyle(View, getBackgroundStyle)
export const SchemePrimaryButton = (props: any) => (
  <Button {...props} color={getPrimaryButtonColor(useColorScheme())} />
)

interface SchemedStackProps {
  screenOptions: StackNavigationOptions
}

export const withSchemedNav = (Stack: FunctionComponent<SchemedStackProps>) => {
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
