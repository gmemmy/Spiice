import React, { Fragment } from 'react'
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native'
import { getHeight, getWidth, fontFamily } from '../../utils/styles'
import colors from '../../utils/colors'

// components
import CustomTextInput from '../Widgets/TextInput'
import Button from '../Widgets/Button'

const Authentication = ({ header, width, height }: any) => {
  return (
    <Fragment>
      <View
        style={[
          styles.container,
          { height: getHeight(height), width: getWidth(width) },
        ]}
      >
        <Text style={styles.header}>{header}</Text>
        <View style={styles.textInputContainer}>
          <CustomTextInput height={52} width={295} placeholder="First name" />
          <CustomTextInput height={52} width={295} placeholder="Last name" />
          <CustomTextInput height={52} width={295} placeholder="Email" />
          <CustomTextInput height={52} width={295} placeholder="Password" />
        </View>
      </View>
      <View style={styles.bottomContainer}>
        <Button buttonText={header} />
        <View style={styles.questionContainer}>
          <Text style={styles.question}>You have an account?</Text>
          <TouchableOpacity style={{ marginLeft: getWidth(5) }}>
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
  )
}

const styles = StyleSheet.create({
  container: {
    marginTop: getHeight(100),
    borderRadius: getWidth(8),
    backgroundColor: colors.WHITE,
    borderColor: colors.LILAC,
    borderWidth: 1,
    alignItems: 'center',
  },
  textInputContainer: {
    marginTop: getHeight(30),
  },
  header: {
    fontSize: getHeight(27),
    top: getHeight(30),
  },
  bottomContainer: {
    marginTop: 'auto',
    marginBottom: getHeight(80),
    alignItems: 'center',
  },
  questionContainer: {
    flexDirection: 'row',
    marginTop: getHeight(20),
  },
  question: {
    fontSize: getHeight(18),
    fontFamily: fontFamily.FONT_FAMILY_REGULAR,
    color: colors.BLACK,
  },
})

export default Authentication
