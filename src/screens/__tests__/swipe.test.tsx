import React from 'react'
import renderer from 'react-test-renderer'

import Swipe from '../swipe'

describe('Swipe', () => {
  it('should render', () => {
    const navigation = { goBack: () => {} }
    const render = renderer.create(<Swipe navigation={navigation} />)
    expect(render.toJSON()).toMatchSnapshot()
  })
})
