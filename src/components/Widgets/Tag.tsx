import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { getHeight, getWidth } from '../../utils/styles'
import colors from '../../utils/colors'

const Tag = ({ text }: any) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{text}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    height: getHeight(24),
    borderColor: colors.ROYAL_PURPLE,
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: getHeight(5),
    fontSize: getHeight(10),
    paddingHorizontal: getWidth(5),
  },
  text: {
    fontSize: getHeight(13),
    color: colors.ROYAL_PURPLE,
  },
})

export default Tag
