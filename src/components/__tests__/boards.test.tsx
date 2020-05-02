import React from 'react'
import renderer from 'react-test-renderer'
import { Text } from 'react-native'

import { SwipeBoard } from '../boards'
import { State } from 'react-native-gesture-handler'

let handlerTag = 1

describe('SwipeBoard', () => {
  it('should render children when no events passed', () => {
    const render = renderer.create(
      <SwipeBoard>
        <Text>Plain</Text>
      </SwipeBoard>
    )
    expect(render.toJSON()).toMatchSnapshot()
  })

  it('should render wrapped children when an event passed', () => {
    const event = jest.fn()
    const render = renderer.create(
      <SwipeBoard onDown={event}>
        <Text>Plain</Text>
      </SwipeBoard>
    )

    const text = render.root.findByType(Text)
    text.props.onGestureHandlerStateChange({
      nativeEvent: { handlerTag, state: State.ACTIVE },
    })
    handlerTag++
    expect(event).toHaveBeenCalledTimes(1)

    expect(render.toJSON()).toMatchSnapshot()
  })

  it('should wrap children up to the number of possible events', () => {
    const event = jest.fn()
    const render = renderer.create(
      <SwipeBoard onDown={event} onLeft={event} onRight={event} onUp={event}>
        <Text>Plain</Text>
      </SwipeBoard>
    )

    const expectedCalls = 4
    const goalTag = handlerTag + expectedCalls
    const text = render.root.findByType(Text)
    while (handlerTag <= goalTag) {
      text.props.onGestureHandlerStateChange({
        nativeEvent: { handlerTag, state: State.ACTIVE },
      })
      handlerTag++
    }
    expect(event).toHaveBeenCalledTimes(expectedCalls)
  })
})
