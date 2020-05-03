import React from 'react'
import { Alert, StyleSheet, View } from 'react-native'

import { MenuButton } from '../components/buttons'
import { SwipeBoard } from '../components/boards'

import { ScreenView } from './view'

const SwipeScreen = ({ navigation }: any) => {
  return (
    <ScreenView>
      <SwipeBoard onUp={() => Alert.alert('Swipped Up!')}>
        <View style={styles.container} />
      </SwipeBoard>
      <MenuButton navigate={navigation.navigate} />
    </ScreenView>
  )
}

SwipeScreen.screenName = 'Swipe'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: '100%',
  },
})

export default SwipeScreen
