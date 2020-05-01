import React from 'react'
import {
  Directions,
  FlingGestureHandler,
  State,
} from 'react-native-gesture-handler'
import { StyleSheet, View, Alert } from 'react-native'

import { MenuButton } from '../components/buttons'

import { ScreenView } from './view'

const SwipeScreen = ({ navigation }: any) => {
  return (
    <ScreenView>
      <FlingGestureHandler
        direction={Directions.LEFT}
        onHandlerStateChange={({ nativeEvent }) => {
          if (nativeEvent.state === State.ACTIVE) {
            Alert.alert('flingged left!')
          }
        }}
      >
        <FlingGestureHandler
          direction={Directions.RIGHT}
          onHandlerStateChange={({ nativeEvent }) => {
            if (nativeEvent.state === State.ACTIVE) {
              Alert.alert('flingged right!')
            }
          }}
        >
          <View style={styles.container} />
        </FlingGestureHandler>
      </FlingGestureHandler>
      <MenuButton navigate={navigation.navigate} />
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
