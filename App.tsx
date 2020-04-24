import React from 'react'
import { AppearanceProvider } from 'react-native-appearance'

import HomeScreen from './src/screens/home'

const App = () => <AppearanceProvider><HomeScreen /></AppearanceProvider>

export default App
