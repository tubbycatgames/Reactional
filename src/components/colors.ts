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
  darkTextPrimary: {
    color: white,
  },
  lightBackground: {
    backgroundColor: light,
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
export const getBackgroundColor = getSchemeValue(dark, light)

export const getPrimaryTextStyle = getSchemeValue(
  styles.darkTextPrimary,
  styles.lightTextPrimary
)
export const getPrimaryTextColor = getSchemeValue(white, black)

export const getPrimaryButtonColor = getSchemeValue(bright, medium)
