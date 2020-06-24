import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

// Search Screens
import ChatList from '../screens/Messages/ChatList'

const Stack = createStackNavigator()

const Chat = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Chat List" component={ChatList} />
    </Stack.Navigator>
  )
}

export default Chat
