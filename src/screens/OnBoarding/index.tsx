import React, { useState, Fragment } from 'react'
import { View, Text, ImageBackground, TouchableOpacity } from 'react-native'
import { getHeight, getWidth, fontFamily } from '../../utils/styles'
import styles from './styles'

// images
const bubblesBackground = require('../../../assets/images/bubbles.png')

// components
import OnBoarding from '../../components/Views/OnBoarding'
import Button from '../../components/Widgets/Button'

const OnBoardingScreen = ({ navigation }: any) => {
  const [onScreen1, setOnScreen1] = useState(true)
  return (
    <ImageBackground style={styles.container} source={bubblesBackground}>
      {onScreen1 ? (
        <Fragment>
          <Text style={styles.title}>Spiice</Text>
          <View style={styles.bottomContainer}>
            <Button
              buttonText="Discover the platform"
              onPress={() => setOnScreen1(false)}
            />
            <View style={styles.questionContainer}>
              <Text style={styles.question}>You have an account?</Text>
              <TouchableOpacity
                style={{ marginLeft: getWidth(5) }}
                onPress={() => {
                  setOnScreen1(false)
                }}
              >
                <Text
                  style={[
                    styles.question,
                    { fontFamily: fontFamily.FONT_FAMILY_MEDIUM },
                  ]}
                >
                  Login
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </Fragment>
      ) : (
        <OnBoarding navigation={navigation} />
      )}
    </ImageBackground>
  )
}

export default OnBoardingScreen
