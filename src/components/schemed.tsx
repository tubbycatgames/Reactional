import React, { ComponentType } from 'react'
import { Text, View } from 'react-native'
import { useColorScheme } from 'react-native-appearance'

import { getBackgroundStyle, getPrimaryTextStyle } from './colors'

export const withSchemedStyle = (
  Wrapped: ComponentType,
  getStyle: Function
) => {
  return (props: any) => (
    <Wrapped {...props} style={[getStyle(useColorScheme()), props.style]} />
  )
}

export const SchemeText = withSchemedStyle(Text, getPrimaryTextStyle)
export const SchemeBackground = withSchemedStyle(View, getBackgroundStyle)
