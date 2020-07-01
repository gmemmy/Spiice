import React from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'
import styles from './styles'

// components
import BackButton from '../../../components/Widgets/BackButton'
import Profile from '../../../components/Widgets/Profile'

const phone = require('../../../../assets/phone.png')
const options = require('../../../../assets/options.png')

const Chat = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
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
          <TouchableOpacity>
            <Image style={styles.icon} source={phone} />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image style={styles.icon} source={options} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

export default Chat
