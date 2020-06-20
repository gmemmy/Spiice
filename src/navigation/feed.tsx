import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

// Feed Screens
import ResumeScreen from '../screens/Feed/Resume'
import DetailsScreen from '../screens/Feed/Details'
import ProjectScreen from '../screens/Feed/Project'
import SendWorkScreen from '../screens/Feed/SendWork'

const Stack = createStackNavigator()

const Feed = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Resume" component={ResumeScreen} />
      <Stack.Screen name="Details" component={DetailsScreen} />
      <Stack.Screen name="Project" component={ProjectScreen} />
      <Stack.Screen name="SendWork" component={SendWorkScreen} />
    </Stack.Navigator>
  )
}

export default Feed
