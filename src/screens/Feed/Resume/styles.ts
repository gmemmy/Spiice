import { StyleSheet } from 'react-native'
import { getHeight, getWidth, fontFamily } from '../../../utils/styles'
import colors from '../../../utils/colors'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: colors.BABY_PURPLE,
  },
  header: {
    marginTop: getHeight(50),
    marginRight: 'auto',
    marginLeft: getWidth(20),
    color: colors.BLACK,
    fontSize: getHeight(40),
    fontFamily: fontFamily.FONT_FAMILY_BOLD,
  },
  subHeader: {
    marginRight: 'auto',
    marginLeft: getWidth(20),
    color: colors.BLACK,
    fontSize: getHeight(25),
    fontFamily: fontFamily.FONT_FAMILY_SEMI,
    marginTop: getHeight(8),
  },
  chartView: {
    height: getHeight(240),
    width: getWidth(375),
    flexDirection: 'row',
    paddingHorizontal: getWidth(20),
    backgroundColor: colors.WHITE,
    marginTop: getHeight(10),
    alignItems: 'center',
  },
  stats: {
    marginLeft: 'auto',
  },
  dropdown: {
    width: getWidth(10),
    height: getHeight(10),
    resizeMode: 'contain',
  },
  activeProjectsContainer: {
    marginTop: getHeight(30),
  },
  activeProjectsContainerHeader: {
    flexDirection: 'row',
    width: getWidth(375),
    justifyContent: 'space-between',
    paddingHorizontal: getWidth(20),
    alignItems: 'center',
  },
  activeProjectText: {
    fontSize: getHeight(25),
    fontFamily: fontFamily.FONT_FAMILY_BOLD,
  },
  viewAllButton: {
    height: getHeight(34),
    width: getWidth(83),
    backgroundColor: colors.LILAC,
    alignItems: 'center',
    justifyContent: 'center',
  },
  viewAllText: {
    color: colors.BLACK,
    fontSize: getHeight(16),
    fontFamily: fontFamily.FONT_FAMILY_SEMI,
  },
  cardView: {
    alignItems: 'center',
    marginTop: getHeight(5),
  },
})

export default styles
