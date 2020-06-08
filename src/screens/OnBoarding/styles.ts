import { StyleSheet } from 'react-native'
import { getHeight, getWidth, fontFamily } from '../../utils/styles'
import colors from '../../utils/colors'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  title: {
    fontSize: getHeight(96),
    fontFamily: fontFamily.FONT_FAMILY_MEDIUM,
    marginTop: getHeight(250),
    color: colors.BLACK,
    textShadowColor:
      '0px 2.76726px 2.21381px rgba(18, 14, 33, 0.0196802), 0px 6.6501px 5.32008px rgba(18, 14, 33, 0.0282725), 0px 12.5216px 10.0172px rgba(18, 14, 33, 0.035), 0px 22.3363px 17.869px rgba(18, 14, 33, 0.0417275), 0px 41.7776px 33.4221px rgba(18, 14, 33, 0.0503198), 0px 100px 80px rgba(18, 14, 33, 0.07)',
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

export default styles
