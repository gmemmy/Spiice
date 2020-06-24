import React from 'react'
import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import styles from './styles'

// components
import BackButton from '../../../components/Widgets/BackButton'
import Button from '../../../components/Widgets/Button'
import Profile from '../../../components/Widgets/Profile'

const SendProposition = ({ navigation }: any) => {
  return (
    <View style={styles.container}>
      <BackButton navigation={navigation} />
      <Profile marginTop={30} />
      <View style={styles.messageContainer}>
        <Text style={styles.title}>Make a proposition</Text>
        <TextInput
          style={styles.messageInput}
          placeholder="Message..."
          multiline={true}
        />
      </View>
      <View style={styles.buttonView}>
        <Button buttonText="Send" />
      </View>
    </View>
  )
}

export default SendProposition
