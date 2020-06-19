import { StyleSheet } from 'react-native'
import { getWidth, getHeight, fontFamily } from '../../../utils/styles'
import colors from '../../../utils/colors'

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
