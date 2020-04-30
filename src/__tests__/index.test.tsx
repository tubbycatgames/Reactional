import React from 'react'
import renderer from 'react-test-renderer'

import { App } from '..'

// Wraps some logging that navigation throws
jest.mock('react-native/Libraries/Animated/src/NativeAnimatedHelper')

describe('App', () => {
  it('should render with all providers and navigation', () => {
    const render = renderer.create(<App />)
    expect(render.toJSON()).toMatchSnapshot()
  })
})
