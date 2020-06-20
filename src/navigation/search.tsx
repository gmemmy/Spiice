import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

// Search Screens
import Application from '../screens/Search/CreateApplication'

const Stack = createStackNavigator()

const Search = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Application" component={Application} />
    </Stack.Navigator>
  )
}

export default Search
