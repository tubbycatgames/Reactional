import React from 'react'
import renderer from 'react-test-renderer'
import { Button } from 'react-native'

import Home from '../home'

describe('Home', () => {
  it('should render', () => {
    const navigation = { navigate: () => {} }
    const render = renderer.create(<Home navigation={navigation} />)
    expect(render.toJSON()).toMatchSnapshot()
  })

  it('should bind a nav action on button press', () => {
    const navigate = jest.fn()
    const navigation = { navigate }
    const render = renderer.create(<Home navigation={navigation} />)

    const button = render.root.findByType(Button)
    button.props.onPress()
    expect(navigate).toHaveBeenCalledWith('Game')
  })
})
