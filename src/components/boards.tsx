import React from 'react'
import {
  Directions,
  FlingGestureHandler,
  State,
} from 'react-native-gesture-handler'

type Props = {
  // TODO Hack to get over the reducer having an odd type
  children: any
  onDown?: Function
  onLeft?: Function
  onRight?: Function
  onUp?: Function
}

export const SwipeBoard = ({
  children,
  onDown,
  onLeft,
  onRight,
  onUp,
}: Props) => {
  const swipeEvents: [Directions, Function?][] = [
    [Directions.DOWN, onDown],
    [Directions.LEFT, onLeft],
    [Directions.RIGHT, onRight],
    [Directions.UP, onUp],
  ]
  return swipeEvents.reduce(
    (tree, [direction, fn]) =>
      fn ? (
        <FlingGestureHandler
          direction={direction}
          onHandlerStateChange={({ nativeEvent }) => {
            if (nativeEvent.state === State.ACTIVE) {
              fn()
            }
          }}
        >
          {tree}
        </FlingGestureHandler>
      ) : (
        tree
      ),
    children
  )
}
