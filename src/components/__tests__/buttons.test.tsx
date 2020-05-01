import React from 'react'
import renderer from 'react-test-renderer'
import { Button } from 'react-native'

import { MenuButton } from '../buttons'

describe('MenuButton', () => {
  it('should render', () => {
    const render = renderer.create(<MenuButton navigate={() => {}} />)
    expect(render.toJSON()).toMatchSnapshot()
  })

  it('should bind a nav action on button press', () => {
    const navigate = jest.fn()
    const render = renderer.create(<MenuButton navigate={navigate} />)

    const button = render.root.findByType(Button)
    button.props.onPress()
    expect(navigate).toHaveBeenCalledWith('Menu')
  })
})
