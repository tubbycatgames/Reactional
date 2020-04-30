import React from 'react'
import renderer from 'react-test-renderer'

import Home from '../home'

const navigation = { navigate: jest.fn() }

describe('Home', () => {
  it('should render', () => {
    const tree = renderer.create(
      <Home navigation={navigation} />
    ).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
