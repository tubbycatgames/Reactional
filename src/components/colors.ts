import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  darkBackground: {
    backgroundColor: '#323a45',
  },
  darkTextPrimary: {
    color: '#FFF',
  },
  lightBackground: {
    backgroundColor: '#e1f3f8',
  },
  lightTextPrimary: {
    color: '#212121',
  },
})

export const getSchemeStyle = (dark: any, light: any) => {
  return (scheme: string) => (scheme === 'dark' ? dark : light)
}

export const getBackgroundStyle = getSchemeStyle(
  styles.darkBackground, styles.lightBackground
)

export const getPrimaryTextStyle = getSchemeStyle(
  styles.darkTextPrimary, styles.lightTextPrimary
)
