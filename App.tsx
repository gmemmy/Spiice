import React, { useEffect, useState } from 'react';
import { View } from 'react-native'
import * as Font from 'expo-font'
import Navigator from './src/navigator'

export default function App() {
  const [fontLoaded, setFontLoaded] = useState(false)

  useEffect(() => {
    Font.loadAsync({
      'RedHatDisplayRegular': require('./assets/fonts/RedHatDisplay-Regular.ttf'),
      'RedHatDisplayMedium': require('./assets/fonts/RedHatDisplay-Medium.ttf'),
      'RedHatDisplayBold': require('./assets/fonts/RedHatDisplay-Bold.ttf'),
    }).then(() => setFontLoaded(true))

    return () => {
      setFontLoaded(false)
    }
  }, [])

  if (!fontLoaded) {
    return <View />
  }
  return (
    <Navigator />
  );
}
