import React from 'react'
import renderer from 'react-test-renderer'

import Game from '../game'

describe('Game', () => {
  it('should render', () => {
    const navigation = { goBack: () => {} }
    const render = renderer.create(<Game navigation={navigation} />)
    expect(render.toJSON()).toMatchSnapshot()
  })
})
