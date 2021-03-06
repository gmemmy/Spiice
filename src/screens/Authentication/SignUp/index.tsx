import React from 'react'
import { ImageBackground, Text } from 'react-native'
import styles from './styles'

// images
const bubblesBackground = require('../../../../assets/images/bubbles.png')

// components
import Authentication from '../../../components/Views/Authentication'

const SignUpScreen = ({ navigation }: any) => {
  return (
    <ImageBackground style={styles.container} source={bubblesBackground}>
      <Authentication
        navigationLabel="LogInScreen"
        navigation={navigation}
        header="Sign-up"
        height={412}
        width={343}
      />
    </ImageBackground>
  )
}

export default SignUpScreen
