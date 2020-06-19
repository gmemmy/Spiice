import React, { useEffect, useState, useContext, useReducer } from 'react';
import { View } from 'react-native'
import * as Font from 'expo-font'
import { Navigator, TabNavigator } from './src/navigation/navigator'
import Store from './src/context/store'
import rootReducer from './src/reducers'
import initialState from './src/reducers/initialState'
import getActions from './src/actions/'

export default function App() {
  const [fontLoaded, setFontLoaded] = useState(false)
  const [state, dispatch] = useReducer(rootReducer, initialState)

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
    <Store.Provider value={{ ...state, ...getActions(dispatch) }}>
      {state.user.isAuthenticated ? <TabNavigator /> :  <Navigator />}
    </Store.Provider>
  );
}
