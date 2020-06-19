import { StyleSheet } from 'react-native'
import { getWidth, getHeight, fontFamily } from '../../../utils/styles'
import colors from '../../../utils/colors'

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backContainer: {
    marginLeft: getWidth(20),
    marginTop: getHeight(50),
    flexDirection: 'row',
    alignItems: 'center',
  },
  backImage: {
    width: getWidth(20),
    height: getHeight(20),
    resizeMode: 'contain',
  },
  backText: {
    color: colors.ROYAL_PURPLE,
    fontSize: getHeight(18),
    fontFamily: fontFamily.FONT_FAMILY_MEDIUM,
    marginLeft: getWidth(8),
  },
  header: {
    marginLeft: getWidth(20),
    color: colors.ROYAL_PURPLE,
    fontSize: getHeight(20),
    fontFamily: fontFamily.FONT_FAMILY_BOLD,
    marginTop: getHeight(20),
  },
  dropDownContainer: {
    marginTop: getHeight(40),
  },
})

export default styles
