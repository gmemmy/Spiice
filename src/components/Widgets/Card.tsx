import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { getWidth, getHeight, fontFamily } from '../../utils/styles'
import colors from '../../utils/colors'

const Card = ({ header, name, status }: any) => {
  return (
    <TouchableOpacity style={styles.container}>
      <View>
        <Text style={styles.header}>{header}</Text>
        <Text style={styles.name}>{name}</Text>
      </View>
      <Text style={styles.status}>{status}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingHorizontal: getWidth(20),
    width: getWidth(359),
    marginTop: getHeight(15),
    height: getHeight(102),
    backgroundColor: colors.WHITE,
    alignItems: 'center',
    justifyContent: 'space-between',
    borderRadius: getHeight(8),
    shadowOpacity: 0.2,
    shadowColor: colors.BLACK,
    shadowOffset: { width: 0, height: getHeight(1) },
  },
  header: {
    color: colors.BLACK,
    fontSize: getHeight(20),
    fontFamily: fontFamily.FONT_FAMILY_BOLD,
  },
  name: {
    marginTop: getHeight(5),
    color: colors.ROYAL_PURPLE,
    fontSize: getHeight(16),
    fontFamily: fontFamily.FONT_FAMILY_REGULAR,
  },
  status: {
    color: colors.ROYAL_PURPLE,
    fontSize: getHeight(16),
    fontFamily: fontFamily.FONT_FAMILY_REGULAR,
    marginTop: 'auto',
    marginBottom: getHeight(25),
  },
})

export default Card
