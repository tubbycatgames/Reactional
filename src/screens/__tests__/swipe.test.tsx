import React from 'react'
import renderer from 'react-test-renderer'

import Swipe from '../swipe'

describe('Swipe', () => {
  it('should render', () => {
    const render = renderer.create(<Swipe />)
    expect(render.toJSON()).toMatchSnapshot()
  })
})
