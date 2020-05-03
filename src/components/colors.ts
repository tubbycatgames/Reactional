import { StyleSheet } from 'react-native'

const darkBackgroundColor = '#1C304A'
const darkPrimaryButtonColor = '#00CFFF'
const darkTextPrimaryColor = '#FFF'
const lightBackgroundColor = '#B3EFFF'
const lightPrimaryButtonColor = '#046B99'
const lightTextPrimaryColor = '#000'

const styles = StyleSheet.create({
  darkBackground: {
    backgroundColor: darkBackgroundColor,
  },
  darkTextPrimary: {
    color: darkTextPrimaryColor,
  },
  lightBackground: {
    backgroundColor: lightBackgroundColor,
  },
  lightTextPrimary: {
    color: lightTextPrimaryColor,
  },
})

export const getSchemeValue = (dark: any, light: any) => {
  return (scheme: string) => (scheme === 'dark' ? dark : light)
}

export const getBackgroundStyle = getSchemeValue(
  styles.darkBackground,
  styles.lightBackground
)
export const getBackgroundColor = getSchemeValue(
  darkBackgroundColor,
  lightBackgroundColor
)

export const getPrimaryTextStyle = getSchemeValue(
  styles.darkTextPrimary,
  styles.lightTextPrimary
)
export const getPrimaryTextColor = getSchemeValue(
  darkTextPrimaryColor,
  lightTextPrimaryColor
)

export const getPrimaryButtonColor = getSchemeValue(
  darkPrimaryButtonColor,
  lightPrimaryButtonColor
)
