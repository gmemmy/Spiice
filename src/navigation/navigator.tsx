import React from 'react'
import { Image, StyleSheet, TouchableOpacity } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { getWidth } from '../utils/styles'

// Bottom Navigator Screens
import Feed from './feed'
import Search from './search'
import Chat from './chat'

// components
import OnBoardingScreen from '../screens/OnBoarding'
import SignUpScreen from '../screens/Authentication/SignUp'
import LogInScreen from '../screens/Authentication/LogIn'

// images
const homeIcon = require('../../assets/home.png')
const activeHomeIcon = require('../../assets/active-home.png')
const searchIcon = require('../../assets/search.png')
const activeSearchIcon = require('../../assets/active-search.png')
const messageIcon = require('../../assets/message.png')
const activeMessageIcon = require('../../assets/active-message.png')
const profileIcon = require('../../assets/profile.png')
const activeProfileIcon = require('../../assets/active-profile.png')

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

export const TabNavigator = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator tabBarOptions={{ showLabel: false }}>
        <Tab.Screen
          name="Feed"
          component={Feed}
          options={{
            tabBarIcon: ({ focused }) =>
              focused ? (
                <Image source={activeHomeIcon} style={styles.icon} />
              ) : (
                <Image source={homeIcon} style={styles.icon} />
              ),
          }}
        />
        <Tab.Screen
          name="Search"
          component={Search}
          options={{
            tabBarIcon: ({ focused }) =>
              focused ? (
                <Image source={activeSearchIcon} style={styles.icon} />
              ) : (
                <Image source={searchIcon} style={styles.icon} />
              ),
          }}
        />
        <Tab.Screen
          name="Chat"
          component={Chat}
          options={{
            tabBarIcon: ({ focused }) =>
              focused ? (
                <Image source={activeMessageIcon} style={styles.icon} />
              ) : (
                <Image source={messageIcon} style={styles.icon} />
              ),
          }}
        />
        <Tab.Screen
          name="Hey"
          component={Search}
          options={{
            tabBarIcon: ({ focused }) =>
              focused ? (
                <Image source={activeProfileIcon} style={styles.icon} />
              ) : (
                <Image source={profileIcon} style={styles.icon} />
              ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({
  icon: {
    width: getWidth(20),
    resizeMode: 'contain',
  },
})
