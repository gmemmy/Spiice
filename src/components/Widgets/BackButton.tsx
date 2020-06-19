import React from 'react'
import { TouchableOpacity, Text, StyleSheet, Image } from 'react-native'
import { getWidth, getHeight, fontFamily } from '../../utils/styles'
import colors from '../../utils/colors'

const backButton = require('../../../assets/back.png')

const BackButton = ({ navigation }: any) => {
  return (
    <TouchableOpacity
      onPress={() => navigation.goBack()}
      style={styles.backContainer}
    >
      <Image style={styles.backImage} source={backButton} />
      <Text style={styles.backText}>Back</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  backContainer: {
    marginLeft: getWidth(20),
    marginTop: getHeight(50),
    flexDirection: 'row',
    alignItems: 'center',
  },
  backImage: {
    width: getWidth(20),
    height: getHeight(20),
    resizeMode: 'contain',
  },
  backText: {
    color: colors.ROYAL_PURPLE,
    fontSize: getHeight(18),
    fontFamily: fontFamily.FONT_FAMILY_MEDIUM,
    marginLeft: getWidth(8),
  },
})

export default BackButton
