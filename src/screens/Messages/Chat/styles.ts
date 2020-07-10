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
    backgroundColor: '#5668C6',
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
  options: {
    flexDirection: 'row',
    marginTop: getHeight(25),
    width: getWidth(55),
    justifyContent: 'space-between',
    marginRight: getWidth(20),
  },
})

export default styles
