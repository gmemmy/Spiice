import React from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'
import styles from './styles'

// components
import DropDown from '../../../components/Widgets/DropdownContainer'
import BackButton from '../../../components/Widgets/BackButton'

const Details = ({ navigation }: any) => {
  return (
    <View style={styles.container}>
      <BackButton navigation={navigation} />
      <Text style={styles.header}>DETAILS</Text>
      <View style={styles.dropDownContainer}>
        <DropDown title="Total Gains" amount="27k" />
        <DropDown title="Total Projects" amount="27k" />
        <DropDown title="Total Requests" amount="27k" />
        <DropDown title="Total Reviews" amount="27k" />
      </View>
    </View>
  )
}

export default Details
