import { StyleSheet } from 'react-native'
import { getHeight, getWidth, fontFamily } from '../../../utils/styles'
import colors from '../../../utils/colors'
import { Colors } from 'react-native/Libraries/NewAppScreen'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.BABY_PURPLE,
    alignItems: 'center',
  },
  header: {
    marginTop: getHeight(50),
    marginRight: 'auto',
    marginLeft: getWidth(20),
    color: colors.BLACK,
    fontSize: getHeight(40),
    fontFamily: fontFamily.FONT_FAMILY_BOLD,
  },
  searchBar: {
    height: getHeight(45),
    width: getWidth(343),
    backgroundColor: colors.WHITE,
    marginTop: getHeight(20),
    shadowOpacity: 0.2,
    shadowColor: colors.BLACK,
    shadowOffset: { width: 0, height: getHeight(1) },
    borderRadius: getHeight(8),
    borderColor: colors.LILAC,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  searchInput: {
    height: getHeight(45),
    backgroundColor: colors.WHITE,
    width: getWidth(280),
    borderRadius: getHeight(10),
    fontSize: getHeight(16),
    fontFamily: fontFamily.FONT_FAMILY_REGULAR,
    paddingLeft: getWidth(10),
    color: colors.BLACK,
  },
  searchIcon: {
    height: getHeight(18),
    width: getWidth(18),
    resizeMode: 'contain',
    marginRight: getWidth(10),
  },
  filterContainer: {
    marginTop: getHeight(40),
    marginRight: 'auto',
    marginLeft: getWidth(20),
    flexDirection: 'row',
    alignItems: 'center',
  },
  filterIcon: {
    height: getHeight(22),
    width: getWidth(22),
    resizeMode: 'contain',
  },
  filterText: {
    marginLeft: getWidth(10),
    fontSize: getHeight(16),
    color: colors.ROYAL_PURPLE,
    fontFamily: fontFamily.FONT_FAMILY_MEDIUM,
  },
  projectContainer: {
    marginTop: getHeight(20),
  },
  profileContainer: {
    height: getHeight(79),
    width: getWidth(359),
    backgroundColor: colors.GRAY,
    justifyContent: 'center',
  },
  timeline: {
    color: colors.ROYAL_PURPLE,
    fontSize: getHeight(14),
    fontFamily: fontFamily.FONT_FAMILY_REGULAR,
  },
  application: {
    paddingHorizontal: getWidth(20),
    backgroundColor: colors.WHITE,
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
  },
})

export default styles
