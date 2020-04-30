import React from 'react'
import renderer from 'react-test-renderer'
import { Text } from 'react-native'

import { ScreenView } from '../view'

describe('Screen View', () => {
  it('should wrap children in a screen container', () => {
    const tree = renderer.create(
      <ScreenView>
        <Text>Howdy Ho!</Text>
      </ScreenView>
    ).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
