import React from 'react'
import { View, Text, TouchableOpacity, Linking } from 'react-native'
import styles from './styles'

// components
import BackButton from '../../../components/Widgets/BackButton'
import Button from '../../../components/Widgets/Button'
import Profile from '../../../components/Widgets/Profile'
import Tag from '../../../components/Widgets/Tag'
import colors from '../../../utils/colors'
import { getHeight, fontFamily } from '../../../utils/styles'

const Proposition = ({ navigation }: any) => {
  return (
    <View style={styles.container}>
      <BackButton />
      <View style={styles.projectContainer}>
        <View style={styles.profileContainer}>
          <Profile marginTop={0} />
        </View>
        <View style={styles.application}>
          <Text style={styles.timeline}>Posted 8 days ago</Text>
          <Text style={styles.applicationHeader}>Create an application</Text>
          <Text style={styles.description}>Description</Text>
          <Text style={styles.bioText}>
            We are a young startup from Paris looking for{'\n'}
            for a designer who can help us design a{'\n'}
            tech oriented application. We are open to{'\n'}
            proposals.{'\n'}
            You can see our project here:{'\n'}
            <Text onPress={() => Linking.openURL('http://google.com')}>
              https://google.com{'\n'}
            </Text>
            We are working with Figma and Photoshop.
          </Text>
          <View style={styles.priceContainer}>
            <Text
              style={{
                color: colors.ROYAL_PURPLE,
                fontSize: getHeight(13),
              }}
            >
              16 propositions
            </Text>
            <Text
              style={{
                fontSize: getHeight(16),
                color: colors.PURPLE,
                fontFamily: fontFamily.FONT_FAMILY_BOLD,
              }}
            >
              $ 2400
            </Text>
          </View>
          <View style={styles.tagContainer}>
            <Tag text="UX/UI" />
            <Tag text="DESIGN" />
            <Tag text="FIGMA" />
            <Tag text="PHOTOSHOP" />
          </View>
        </View>
      </View>
      <View style={styles.buttonView}>
        <Button buttonText="Make a proposition" />
      </View>
    </View>
  )
}

export default Proposition
