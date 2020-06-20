import React from 'react'
import { View, Text, Image } from 'react-native'
import styles from './styles'
import colors from '../../../utils/colors'
import { getHeight, fontFamily } from '../../../utils/styles'

// components
import BackButton from '../../../components/Widgets/BackButton'
import Button from '../../../components/Widgets/Button'
import Profile from '../../../components/Widgets/Profile'

const Project = ({ navigation }: any) => {
  return (
    <View style={styles.container}>
      <BackButton navigation={navigation} />
      <View style={styles.headerBanner}>
        <Text style={styles.bannerTitle}>
          You are in charge of this project
        </Text>
        <Text style={styles.deadline}>Deadline 28/03/2020</Text>
      </View>
      <Profile />
      <Text style={styles.timeline}>Posted 8 days ago</Text>
      <View style={styles.bio}>
        <Text style={styles.bioHeader}>WireFrames</Text>
        <View style={styles.bioTextContainer}>
          <Text style={styles.bioText}>
            I need a designer for my new website.{'\n'}
            The project is just at the beginning and I{'\n'}
            need wireframes before I start coding the{'\n'}
            website. I only want fireframes and I don't{'\n'}
            want prototype or UI design.{'\n'}
          </Text>
        </View>
      </View>
      <View style={styles.priceContainer}>
        <View style={styles.wireframesContainer}>
          <Text style={{ fontSize: getHeight(13), color: colors.ROYAL_PURPLE }}>
            WIREFRAME
          </Text>
        </View>
        <Text style={styles.price}>$ 600</Text>
      </View>
      <View style={styles.buttonView}>
        <Button
          buttonText="Send your work"
          onPress={() => navigation.navigate('SendWork')}
        />
      </View>
    </View>
  )
}

export default Project
