import React, { useState, useEffect, useCallback } from 'react'
import { View, Image, TouchableOpacity } from 'react-native'
import { BlurView } from 'react-native-blur'
import { GiftedChat, Bubble } from 'react-native-gifted-chat'
import styles from './styles'
import messagesArray from './constants'

// components
import BackButton from '../../../components/Widgets/BackButton'
import Profile from '../../../components/Widgets/Profile'

const phone = require('../../../../assets/phone.png')
const options = require('../../../../assets/options.png')

const Chat = () => {
  const [messages, setMessages] = useState<any>([])

  useEffect(() => {
    setMessages(messagesArray)
  }, [])

  const onSend = useCallback((messages = []) => {
    setMessages(
      (
        previousMessages:
          | import('react-native-gifted-chat').IMessage[]
          | undefined
      ) => GiftedChat.append(previousMessages, messages)
    )
    messagesArray.push(messages[0])
  }, [])

  return (
    <View style={styles.container}>
      <BlurView blurType="light" style={styles.header}>
        <BackButton />
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <View style={styles.profileContainer}>
            <Profile />
          </View>
          <View style={styles.options}>
            <TouchableOpacity>
              <Image style={styles.icon} source={phone} />
            </TouchableOpacity>
            <TouchableOpacity>
              <Image style={styles.icon} source={options} />
            </TouchableOpacity>
          </View>
        </View>
      </BlurView>
      <GiftedChat
        messages={messages}
        onSend={(messages) => onSend(messages)}
        user={{
          _id: 1,
        }}
        renderBubble={(props) => {
          return (
            <Bubble
              {...props}
              wrapperStyle={{
                left: {
                  backgroundColor: '#9279FE',
                },
                right: {
                  backgroundColor: '#CABDFD',
                },
              }}
            />
          )
        }}
      />
    </View>
  )
}

export default Chat
