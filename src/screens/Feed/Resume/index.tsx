import React from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'
import styles from './styles'
import colors from '../../../utils/colors'
import { getHeight, fontFamily, getWidth } from '../../../utils/styles'

// components
import Card from '../../../components/Widgets/Card'
import BarChartView from '../../../components/Widgets/BarChart'

const ResumeScreen = ({ navigation }: any) => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Feed</Text>
      <Text style={styles.subHeader}>Resume</Text>
      <View style={styles.chartView}>
        <BarChartView />
        <View style={styles.stats}>
          <Text
            style={{
              fontSize: getHeight(18),
              fontFamily: fontFamily.FONT_FAMILY_BOLD,
              color: colors.ROYAL_PURPLE,
            }}
          >
            TOTAL GAINS
          </Text>
          <Text
            style={{
              fontSize: getHeight(60),
              fontFamily: fontFamily.FONT_FAMILY_BOLD,
              color: colors.BLACK,
            }}
          >
            27K
          </Text>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <TouchableOpacity onPress={() => navigation.navigate('Details')}>
              <Image
                style={styles.dropdown}
                source={require('../../../../assets/dropdown.png')}
              />
            </TouchableOpacity>
            <Text
              style={{
                marginLeft: getWidth(5),
                fontSize: getHeight(18),
                color: colors.ROYAL_PURPLE,
                fontFamily: fontFamily.FONT_FAMILY_REGULAR,
              }}
            >
              18%
            </Text>
          </View>
        </View>
      </View>
      <View style={styles.activeProjectsContainer}>
        <View style={styles.activeProjectsContainerHeader}>
          <Text style={styles.activeProjectText}>Active Projects</Text>
          <TouchableOpacity style={styles.viewAllButton}>
            <Text style={styles.viewAllText}>View all</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.cardView}>
          <Card
            header="Wireframes"
            name="Francisco Fischer"
            status="Active"
            navigation={navigation}
          />
          <Card
            header="Software Development"
            name="Amel Rio"
            status="Pending"
            navigation={navigation}
          />
        </View>
      </View>
    </View>
  )
}

export default ResumeScreen
