import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  darkBackground: {
    backgroundColor: '#FFF',
  },
  darkTextPrimary: {
    color: '#000',
  },
  lightBackground: {
    backgroundColor: '#000',
  },
  lightTextPrimary: {
    color: '#FFF',
  },
})

const getSchemeStyle = (dark: any, light: any) => {
  return (scheme: string) => 
  {
    return scheme === 'dark' ? dark : light;
  }
}

export const getBackgroundStyle = getSchemeStyle(
  styles.lightBackground, 
  styles.darkBackground
)
    
export const getPrimaryTextStyle = getSchemeStyle(
  styles.darkTextPrimary, 
  styles.lightTextPrimary
)
