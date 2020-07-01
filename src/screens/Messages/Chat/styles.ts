import { StyleSheet } from 'react-native'
import colors from '../../../utils/colors'
import { getHeight, getWidth } from '../../../utils/styles'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.BABY_PURPLE,
  },
  header: {
    height: getHeight(160),
    width: getWidth(375),
    backgroundColor: colors.WHITE,
    position: 'absolute',
    paddingBottom: getHeight(20),
  },
  profileContainer: {
    marginTop: getHeight(20),
  },
  icon: {
    height: getHeight(18),
    width: getWidth(18),
    resizeMode: 'contain',
  },
})

export default styles
