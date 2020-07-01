import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

// Search Screens
import ChatList from '../screens/Messages/ChatList'
import ChatArena from '../screens/Messages/Chat'

const Stack = createStackNavigator()

const Chat = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Chat List" component={ChatList} />
      <Stack.Screen name="Chat" component={ChatArena} />
    </Stack.Navigator>
  )
}

export default Chat
