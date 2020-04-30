import React from 'react'
import renderer from 'react-test-renderer'

import { App } from '..'

// Wraps some logging that navigation throws
jest.mock('react-native/Libraries/Animated/src/NativeAnimatedHelper')

describe('App', () => {
  it('should render with all providers and navigation', () => {
    const tree = renderer.create(<App />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
