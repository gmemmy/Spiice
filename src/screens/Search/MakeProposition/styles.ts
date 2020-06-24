import { StyleSheet } from 'react-native'
import colors from '../../../utils/colors'
import { getHeight, getWidth, fontFamily } from '../../../utils/styles'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.BABY_PURPLE,
  },
  projectContainer: {
    marginTop: getHeight(20),
  },
  profileContainer: {
    height: getHeight(79),
    width: getWidth(359),
    justifyContent: 'center',
  },
  timeline: {
    color: colors.ROYAL_PURPLE,
    fontSize: getHeight(14),
    fontFamily: fontFamily.FONT_FAMILY_REGULAR,
  },
  application: {
    paddingHorizontal: getWidth(20),
    paddingVertical: getHeight(20),
  },
  applicationHeader: {
    marginTop: getHeight(20),
    fontFamily: fontFamily.FONT_FAMILY_BOLD,
    fontSize: getHeight(22),
    color: colors.BLACK,
  },
  description: {
    fontSize: getHeight(20),
    color: colors.BLACK,
    marginTop: getHeight(20),
    fontFamily: fontFamily.FONT_FAMILY_REGULAR,
  },
  applicationText: {
    fontSize: getHeight(16),
    color: colors.ROYAL_PURPLE,
    lineHeight: getHeight(30),
    fontFamily: fontFamily.FONT_FAMILY_REGULAR,
    marginTop: getHeight(5),
  },
  tagContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: getWidth(270),
    marginTop: getHeight(20),
  },
  bioText: {
    fontSize: getHeight(16),
    color: colors.ROYAL_PURPLE,
    lineHeight: getHeight(30),
    fontFamily: fontFamily.FONT_FAMILY_REGULAR,
  },
  priceContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: getHeight(20),
  },
  buttonView: {
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: getHeight(30),
    marginTop: 'auto',
  },
})

export default styles
