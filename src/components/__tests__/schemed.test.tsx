import React from 'react'
import renderer from 'react-test-renderer'
import { View } from 'react-native'

import { withSchemedStyle } from '../schemed'

describe('withSchemedStyle', () => {
  it('should wrap a component with a scheme driven style', () => {
    const getStyle = () => ({ backgroundColor: 'transparent' })
    const SchemedView = withSchemedStyle(View, getStyle)

    const tree = renderer.create(
        <SchemedView 
            style={{color: 'blue'}} 
            testId="A Test" 
        />
    ).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
