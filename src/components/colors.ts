import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  darkBackground: {
    backgroundColor: '#000',
  },
  darkTextPrimary: {
    color: '#FFF',
  },
  lightBackground: {
    backgroundColor: '#FFF',
  },
  lightTextPrimary: {
    color: '#000',
  },
})

const getSchemeStyle = (dark: any, light: any) => {
  return (scheme: string) => scheme === 'dark' ? dark : light
}

export const getBackgroundStyle = getSchemeStyle(
  styles.darkBackground,
  styles.lightBackground
)
    
export const getPrimaryTextStyle = getSchemeStyle(
  styles.darkTextPrimary, 
  styles.lightTextPrimary
)
