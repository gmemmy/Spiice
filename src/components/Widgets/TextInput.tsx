import React, { useState } from 'react'
import {
  TextInput,
  View,
  Image,
  StyleSheet,
  TouchableOpacity,
} from 'react-native'
import { getHeight, getWidth, fontFamily } from '../../utils/styles'
import colors from '../../utils/colors'

// images
const active = require('../../../assets/active.png')
const inActive = require('../../../assets/inactive.png')

const icons = [active, inActive]

const CustomTextInput = ({ height, width, placeholder }: any) => {
  const [passwordIcon, setPasswordIcon] = useState(icons[1])
  const [hidePassword, setHidePassword] = useState(true)
  return (
    <View
      style={{
        flexDirection: 'row',
        marginTop: getHeight(30),
        backgroundColor: colors.LILAC,
        borderRadius: getHeight(10),
        alignItems: 'center',
      }}
    >
      <TextInput
        placeholder={placeholder}
        secureTextEntry={placeholder === 'Password' && hidePassword}
        style={{
          height: getHeight(height),
          width: placeholder === 'Password' ? getWidth(250) : getWidth(width),
          paddingLeft: getWidth(15),
          fontFamily: fontFamily.FONT_FAMILY_MEDIUM,
          fontSize: getHeight(16),
        }}
      />
      {placeholder === 'Password' && (
        <TouchableOpacity
          onPress={() => {
            if (passwordIcon === icons[1]) {
              setPasswordIcon(icons[0])
              setHidePassword(false)
            } else {
              setPasswordIcon(icons[1])
              setHidePassword(true)
            }
          }}
        >
          <Image source={passwordIcon} style={styles.image} />
        </TouchableOpacity>
      )}
    </View>
  )
}

const styles = StyleSheet.create({
  image: {
    height: getHeight(24),
    width: getWidth(24),
    resizeMode: 'contain',
  },
})

export default CustomTextInput
