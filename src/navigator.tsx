import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import OnBoardingScreen from './screens/OnBoarding'
import SignUpScreen from './screens/Authentication/SignUp'
import LogInScreen from './screens/Authentication/LogIn'
import ResumeScreen from './screens/Feed/Resume'

const Stack = createStackNavigator()
const Tab = createBottomTabNavigator()

export const Navigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="OnBoarding" headerMode="none">
        <Stack.Screen name="OnBoardingScreen" component={OnBoardingScreen} />
        <Stack.Screen name="SignUpScreen" component={SignUpScreen} />
        <Stack.Screen name="LogInScreen" component={LogInScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export const MyTabs = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Feed" component={ResumeScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  )
}
