import colors from '../../../utils/colors'

export const barChartData = {
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

export const chartConfig = {
  backgroundGradientFrom: colors.BABY_PURPLE,
  backgroundGradientFromOpacity: 0,
  backgroundGradientTo: colors.PURPLE,
  backgroundGradientToOpacity: 0.5,
  color: (opacity = 1) => `rgba(289, 14, 61, ${opacity})`,
  strokeWidth: 2, // optional, default 3
  barPercentage: 0.8,
  useShadowColorFromDataset: false, // optional
}
