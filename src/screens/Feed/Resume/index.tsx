import React from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'
import { BarChart } from 'react-native-chart-kit'
import { barChartData, chartConfig } from './constants'
import styles from './styles'
import colors from '../../../utils/colors'
import { getHeight, fontFamily, getWidth } from '../../../utils/styles'

// components
import Card from '../../../components/Widgets/Card'

const ResumeScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Feed</Text>
      <Text style={styles.subHeader}>Resume</Text>
      <View style={styles.chartView}>
        <BarChart
          data={barChartData}
          width={getWidth(200)}
          height={getHeight(220)}
          yAxisLabel="$"
          yAxisSuffix="k"
          chartConfig={chartConfig}
          verticalLabelRotation={30}
          showBarTops={true}
          withInnerLines={false}
        />
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
            <TouchableOpacity>
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
          <Card header="Wireframes" name="Francisco Fischer" status="Active" />
          <Card
            header="Software Development"
            name="Amel Rio"
            status="Pending"
          />
        </View>
      </View>
    </View>
  )
}

export default ResumeScreen
