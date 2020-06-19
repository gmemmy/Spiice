import React from 'react'
import { BarChart } from 'react-native-chart-kit'
import { getHeight, fontFamily, getWidth } from '../../utils/styles'
import colors from '../../utils/colors'

const barChartData = {
  labels: [''],
  datasets: [
    {
      data: [
        Math.random() * 100,
        Math.random() * 100,
        Math.random() * 100,
        Math.random() * 100,
      ],
      barColors: ['#dfe4ea'],
    },
  ],
}

const chartConfig = {
  backgroundGradientFrom: colors.BABY_PURPLE,
  backgroundGradientFromOpacity: 0,
  backgroundGradientTo: colors.PURPLE,
  backgroundGradientToOpacity: 0.5,
  color: (opacity = 1) => `rgba(289, 14, 61, ${opacity})`,
  strokeWidth: 2, // optional, default 3
  barPercentage: 0.8,
  useShadowColorFromDataset: false, // optional
}

const BarchartView = () => {
  return (
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
  )
}

export default BarchartView
