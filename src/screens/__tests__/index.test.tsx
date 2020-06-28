import React, { FunctionComponent } from 'react'
import renderer from 'react-test-renderer'
import { View } from 'react-native'

import { withSchemedNav, StackWrapper } from '..'

describe('withSchemedNav', () => {
  it('should wrap a nav stack with scheming params', () => {
    const testView: StackWrapper = ({ screenOptions }) => {
      expect(screenOptions).toMatchSnapshot()
      return <View />
    }
    const SchemedNav = withSchemedNav(testView)
    const render = renderer.create(<SchemedNav />)
    expect(render.toJSON()).toMatchSnapshot()
  })
})
