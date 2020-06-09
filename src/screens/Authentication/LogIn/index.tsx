import React from 'react'
import { ImageBackground } from 'react-native'
import styles from './styles'

// images
const bubblesBackground = require('../../../../assets/images/bubbles.png')

// components
import Authentication from '../../../components/Views/Authentication'

const LoginScreen = ({ navigation }: any) => {
  return (
    <ImageBackground style={styles.container} source={bubblesBackground}>
      <Authentication
        navigation={navigation}
        navigationLabel="SignUpScreen"
        header="Log-in"
        height={320}
        width={343}
      />
    </ImageBackground>
  )
}

export default LoginScreen
