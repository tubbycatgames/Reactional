import React from 'react'
import renderer from 'react-test-renderer'
import { Button } from 'react-native'

import Menu from '../menu'

describe('Menu', () => {
  it('should render', () => {
    const navigation = { navigate: () => {} }
    const render = renderer.create(<Menu navigation={navigation} />)
    expect(render.toJSON()).toMatchSnapshot()
  })

  it('should bind a nav action on button press', () => {
    const navigate = jest.fn()
    const navigation = { navigate }
    const render = renderer.create(<Menu navigation={navigation} />)

    const button = render.root.findAllByType(Button)
    button[0].props.onPress()
    expect(navigate).toHaveBeenCalledWith('Game')
    button[1].props.onPress()
    expect(navigate).toHaveBeenCalledWith('Swipe')
  })
})
