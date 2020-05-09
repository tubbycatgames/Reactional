import React from 'react'
import { Alert, StyleSheet, View } from 'react-native'

import { SwipeBoard } from '../components/boards'

import { ScreenView } from './view'

const SwipeScreen = () => {
  const swipeEvent = (direction: string) => () =>
    Alert.alert(`Swipped ${direction}!`)

  return (
    <ScreenView>
      <SwipeBoard
        onDown={swipeEvent('Down')}
        onLeft={swipeEvent('Left')}
        onRight={swipeEvent('Right')}
        onUp={swipeEvent('Up')}
      >
        <View style={styles.container} />
      </SwipeBoard>
    </ScreenView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: '100%',
  },
})

export default SwipeScreen
