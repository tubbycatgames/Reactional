import React from 'react'
import { Button } from 'react-native'

import { SchemeText } from '../components/schemed'

import { ScreenView } from './view'

type Props = {
  navigation: any,
}

const GameScreen = ({ navigation }: Props) => (
  <ScreenView>
    <SchemeText>In Progress!</SchemeText>
    <Button
      accessibilityLabel={'Click to return Home'}
      onPress={navigation.goBack}
      title={'Go Home'}
    />
  </ScreenView>
)

export default GameScreen
