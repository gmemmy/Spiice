import React, { useState, useEffect } from 'react'
import { View, Text, TextInput, Image, TouchableOpacity } from 'react-native'
import * as ImagePicker from 'expo-image-picker'
import Constants from 'expo-constants'
import styles from './styles'

const uploadIcon = require('../../../../assets/upload.png')
const cancelIcon = require('../../../../assets/cancel.png')

// components
import BackButton from '../../../components/Widgets/BackButton'
import Button from '../../../components/Widgets/Button'
import Profile from '../../../components/Widgets/Profile'

const SendWork = ({ navigation }: any) => {
  const [photo, setPhoto] = useState<any>(null)

  useEffect(() => {
    ;(async () => {
      if (Constants.platform?.ios) {
        const { status } = await ImagePicker.requestCameraRollPermissionsAsync()
        if (status !== 'granted') {
          alert('Sorry, we need camera roll permissions to make this work!')
        }
      }
    })()
  }, [])

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    })

    console.log(result)

    if (!result.cancelled) {
      setPhoto(result.uri)
    }
  }

  return (
    <View style={styles.container}>
      <BackButton navigation={navigation} />
      <Profile />
      <View style={styles.messageContainer}>
        <Text style={styles.title}>Send your work</Text>
        <TextInput
          style={styles.messageInput}
          placeholder="Message..."
          multiline={true}
        />
      </View>
      <View style={styles.uploadImageView}>
        <TouchableOpacity style={styles.uploadContainer} onPress={pickImage}>
          <Text style={styles.uploadText}>Upload file</Text>
          <Image style={styles.uploadedIcon} source={uploadIcon} />
        </TouchableOpacity>
        <View style={styles.uploadedImage}>
          <Text style={styles.imageTitle}>wireframes.sketch</Text>
          <TouchableOpacity>
            <Image style={styles.uploadedIcon} source={cancelIcon} />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.buttonView}>
        <Button buttonText="Send" />
      </View>
    </View>
  )
}

export default SendWork
