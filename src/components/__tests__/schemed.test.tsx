import React from 'react'
import renderer from 'react-test-renderer'
import { View } from 'react-native'

import { withSchemedNav, withSchemedStyle } from '../schemed'

describe('withSchemedStyle', () => {
  it('should wrap a component with a scheme driven style', () => {
    const getStyle = () => ({ backgroundColor: 'transparent' })
    const SchemedView = withSchemedStyle(View, getStyle)

    const render = renderer.create(
      <SchemedView style={{ color: 'blue' }} testId='A Test' />
    )
    expect(render.toJSON()).toMatchSnapshot()
  })
})

describe('withSchemedNav', () => {
  it('should wrap a nav stack with scheming params', () => {
    const SchemedNav = withSchemedNav(({ screenOptions }) => {
      expect(screenOptions).toMatchSnapshot()
      return <View />
    })
    const render = renderer.create(<SchemedNav />)
    expect(render.toJSON()).toMatchSnapshot()
  })
})
