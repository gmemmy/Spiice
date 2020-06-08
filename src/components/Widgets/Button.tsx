import React from 'react'
import { StyleSheet, TouchableOpacity, Text } from 'react-native'
import { getHeight, getWidth, fontFamily } from '../../utils/styles'
import colors from '../../utils/colors'

const Button = ({ buttonText, onPress }: any) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.buttonText}>{buttonText}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.PURPLE,
    height: getHeight(54),
    width: getWidth(263),
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: getHeight(50),
    shadowColor:
      '0px 2.76726px 2.21381px rgba(147, 120, 255, 0.0196802), 0px 6.6501px 5.32008px rgba(147, 120, 255, 0.0282725), 0px 12.5216px 10.0172px rgba(147, 120, 255, 0.035), 0px 22.3363px 17.869px rgba(147, 120, 255, 0.0417275), 0px 41.7776px 33.4221px rgba(147, 120, 255, 0.0503198), 0px 100px 80px rgba(147, 120, 255, 0.07)',
  },
  buttonText: {
    color: colors.WHITE,
    fontSize: getHeight(18),
    fontFamily: fontFamily.FONT_FAMILY_MEDIUM,
  },
})

export default Button
