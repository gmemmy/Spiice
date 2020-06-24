import { StyleSheet } from 'react-native'
import { getHeight, getWidth, fontFamily } from '../../../utils/styles'
import colors from '../../../utils/colors'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.BABY_PURPLE,
  },
  messageContainer: {
    marginTop: getHeight(50),
    alignItems: 'center',
  },
  messageInput: {
    height: getHeight(240),
    width: getWidth(343),
    backgroundColor: colors.LILAC,
    marginTop: getHeight(20),
    fontSize: getHeight(16),
    fontFamily: fontFamily.FONT_FAMILY_REGULAR,
    paddingHorizontal: getWidth(15),
  },
  title: {
    fontFamily: fontFamily.FONT_FAMILY_BOLD,
    fontSize: getHeight(22),
    marginRight: 'auto',
    marginLeft: getWidth(20),
  },
  buttonView: {
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: getHeight(30),
    marginTop: 'auto',
  },
})

export default styles
