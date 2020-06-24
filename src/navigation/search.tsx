import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

// Search Screens
import Application from '../screens/Search/CreateApplication'
import Proposition from '../screens/Search/MakeProposition'
import SendProposition from '../screens/Search/SendProposition'

const Stack = createStackNavigator()

const Search = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Application" component={Application} />
      <Stack.Screen name="Proposition" component={Proposition} />
      <Stack.Screen name="Send Proposition" component={SendProposition} />
    </Stack.Navigator>
  )
}

export default Search
