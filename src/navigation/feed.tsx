import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

// Feed Screens
import ResumeScreen from '../screens/Feed/Resume'
import DetailsScreen from '../screens/Feed/Details'

const Stack = createStackNavigator()

const Feed = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      {/* <Stack.Screen name="Resume" component={ResumeScreen} /> */}
      <Stack.Screen name="Details" component={DetailsScreen} />
    </Stack.Navigator>
  )
}

export default Feed
