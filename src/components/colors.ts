import { StyleSheet } from 'react-native'

const white = '#FFF'
const light = '#B3EFFF'
const bright = '#00CFFF'
const medium = '#046B99'
const dark = '#1C304A'
const black = '#000'

const styles = StyleSheet.create({
  darkBackground: {
    backgroundColor: dark,
  },
  darkHeaderBackground: {
    backgroundColor: medium,
  },
  darkTextPrimary: {
    color: white,
  },
  lightBackground: {
    backgroundColor: light,
  },
  lightHeaderBackground: {
    backgroundColor: bright,
  },
  lightTextPrimary: {
    color: black,
  },
})

export const getSchemeValue = (dark: any, light: any) => {
  return (scheme: string) => (scheme === 'dark' ? dark : light)
}

export const getBackgroundStyle = getSchemeValue(
  styles.darkBackground,
  styles.lightBackground
)

export const getHeaderBackgroundStyle = getSchemeValue(
  styles.darkHeaderBackground,
  styles.lightHeaderBackground
)

export const getPrimaryTextStyle = getSchemeValue(
  styles.darkTextPrimary,
  styles.lightTextPrimary
)
export const getPrimaryTextColor = getSchemeValue(bright, medium)

export const getPrimaryButtonColor = getSchemeValue(bright, medium)
