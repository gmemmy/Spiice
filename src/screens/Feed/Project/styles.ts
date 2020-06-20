import { StyleSheet } from 'react-native'
import { getHeight, getWidth, fontFamily } from '../../../utils/styles'
import colors from '../../../utils/colors'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.BABY_PURPLE,
  },
  headerBanner: {
    height: getHeight(82),
    width: getWidth(375),
    marginTop: getHeight(40),
    backgroundColor: colors.LIGHT_PURPLE,
    alignItems: 'center',
    justifyContent: 'center',
  },
  bannerTitle: {
    fontSize: getHeight(16),
    color: colors.WHITE,
    fontFamily: fontFamily.FONT_FAMILY_MEDIUM,
  },
  deadline: {
    fontSize: getHeight(14),
    color: colors.WHITE,
    marginTop: getHeight(5),
    fontFamily: fontFamily.FONT_FAMILY_REGULAR,
  },
  timeline: {
    marginLeft: getWidth(20),
    color: colors.ROYAL_PURPLE,
    marginTop: getHeight(30),
    fontSize: getHeight(14),
    fontFamily: fontFamily.FONT_FAMILY_REGULAR,
  },
  bio: {
    marginLeft: getWidth(20),
    marginTop: getHeight(20),
  },
  bioHeader: {
    fontFamily: fontFamily.FONT_FAMILY_BOLD,
    fontSize: getHeight(22),
  },
  bioTextContainer: {
    marginTop: getHeight(20),
  },
  bioText: {
    fontSize: getHeight(16),
    color: colors.ROYAL_PURPLE,
    lineHeight: getHeight(30),
    fontFamily: fontFamily.FONT_FAMILY_REGULAR,
  },
  priceContainer: {
    width: getWidth(375),
    flexDirection: 'row',
    paddingHorizontal: getWidth(20),
    justifyContent: 'space-between',
  },
  wireframesContainer: {
    height: getHeight(24),
    width: getWidth(89),
    borderColor: colors.ROYAL_PURPLE,
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: getHeight(5),
    fontSize: getHeight(10),
  },
  price: {
    fontSize: getHeight(16),
    color: colors.LIGHT_PURPLE,
    fontFamily: fontFamily.FONT_FAMILY_MEDIUM,
  },
  buttonView: {
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: getHeight(30),
    marginTop: 'auto',
  },
})

export default styles
