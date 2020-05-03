import { getSchemeValue } from '../colors'

describe('getSchemeValue', () => {
  it('should return a dark scheme value when dark', () => {
    expect(getSchemeValue('black', 'white')('dark')).toBe('black')
  })

  it('should return a light theme value otherwise', () => {
    expect(getSchemeValue('black', 'white')('light')).toBe('white')
  })
})
