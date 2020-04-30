import { getSchemeStyle } from '../colors'

describe('getSchemeStyle', () => {
  it('should return a dark scheme value when dark', () => {
    expect(getSchemeStyle('black', 'white')('dark')).toBe('black')
  })

  it('should return a light theme value otherwise', () => {
    expect(getSchemeStyle('black', 'white')('light')).toBe('white')
  })
})
