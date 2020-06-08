import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import OnBoardingScreen from './screens/OnBoarding'
import SignUpScreen from './screens/Authentication/SignUp'

const Stack = createStackNavigator()

const Navigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="OnBoarding" headerMode="none">
        <Stack.Screen name="OnBoardingScreen" component={OnBoardingScreen} />
        <Stack.Screen name="SignupScreen" component={SignUpScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Navigator
