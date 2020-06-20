import React from 'react'
import { View, Image, Text, StyleSheet } from 'react-native'
import { getHeight, getWidth, fontFamily } from '../../utils/styles'
import colors from '../../utils/colors'

const avatar = require('../../../assets/images/illustrations/avatar.png')

const Profile = ({ marginTop }: any) => {
  return (
    <View
      style={[styles.profileContainer, { marginTop: getHeight(marginTop) }]}
    >
      <Image style={styles.avatar} source={avatar} />
      <Text style={styles.profileName}>Francisco Fischer</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  profileContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: getHeight(20),
  },
  avatar: {
    width: getWidth(48),
    height: getHeight(48),
    resizeMode: 'contain',
  },
  profileName: {
    fontFamily: fontFamily.FONT_FAMILY_BOLD,
    fontSize: getHeight(22),
    marginLeft: getWidth(10),
    color: colors.BLACK,
  },
})

export default Profile
