import React, { Fragment, useState } from 'react'
import { View, StyleSheet, Text, Image, TouchableOpacity } from 'react-native'
import { getHeight, getWidth, fontFamily } from '../../utils/styles'
import colors from '../../utils/colors'

const dropDown = require('../../../assets/dropdown2.png')
const dropUp = require('../../../assets/dropUp.png')

const DropDown = ({ title, amount }: any) => {
  const [showDetails, setShowDetails] = useState<any>(false)
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.dropDownContainer}
        onPress={() => {
          showDetails ? setShowDetails(false) : setShowDetails(true)
        }}
      >
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.amount}>{amount}</Text>
        <Image style={styles.icon} source={showDetails ? dropUp : dropDown} />
      </TouchableOpacity>
      {showDetails && (
        <View style={styles.detailsContainer}>
          <Text>Hello there</Text>
        </View>
      )}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    borderColor: colors.ROYAL_PURPLE,
    borderWidth: 0.4,
    justifyContent: 'center',
  },
  dropDownContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: getWidth(20),
    height: getHeight(86),
    width: getWidth(375),
  },
  amount: {
    marginLeft: 'auto',
  },
  icon: {
    width: getWidth(18),
    height: getHeight(18),
    resizeMode: 'contain',
    marginLeft: getWidth(5),
  },
  title: {
    fontSize: getHeight(18),
    fontFamily: fontFamily.FONT_FAMILY_REGULAR,
  },
  detailsContainer: {
    paddingHorizontal: getWidth(20),
    paddingVertical: getHeight(20),
  },
})

export default DropDown
