import React from 'react'
import renderer from 'react-test-renderer'

import Game from '../game'

const navigation = { goBack: jest.fn() }
describe('Game', () => {
  it('should render', () => {
    const render = renderer.create(<Game navigation={navigation} />)
    expect(render.toJSON()).toMatchSnapshot()
  })
})
