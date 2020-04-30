import React from 'react'
import renderer from 'react-test-renderer'

import Home from '../home'

const navigation = { navigate: jest.fn() }

describe('Home', () => {
  it('should render', () => {
    const render = renderer.create(<Home navigation={navigation} />)
    expect(render.toJSON()).toMatchSnapshot()
  })
})
