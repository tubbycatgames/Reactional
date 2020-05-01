import React from 'react'
import renderer from 'react-test-renderer'
import { Button } from 'react-native'

import Game from '../game'

describe('Game', () => {
  it('should render', () => {
    const navigation = { goBack: () => {} }
    const render = renderer.create(<Game navigation={navigation} />)
    expect(render.toJSON()).toMatchSnapshot()
  })

  it('should bind a nav action on button press', () => {
    const goBack = jest.fn()
    const navigation = { goBack }
    const render = renderer.create(<Game navigation={navigation} />)

    const button = render.root.findByType(Button)
    button.props.onPress()
    expect(goBack).toHaveBeenCalledWith()
  })
})
