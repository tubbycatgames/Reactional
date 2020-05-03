import React, { ComponentType } from 'react'
import { Button, Text, View } from 'react-native'
import { useColorScheme } from 'react-native-appearance'

import {
  getBackgroundStyle,
  getPrimaryButtonColor,
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
