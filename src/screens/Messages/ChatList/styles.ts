import { StyleSheet } from 'react-native'
import colors from '../../../utils/colors'
import { getHeight, getWidth, fontFamily } from '../../../utils/styles'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.BABY_PURPLE,
  },
  header: {
    marginTop: getHeight(60),
    marginRight: 'auto',
    marginLeft: getWidth(20),
    fontFamily: fontFamily.FONT_FAMILY_BOLD,
    fontSize: getHeight(40),
    color: colors.BLACK,
  },
  chatListContainer: {
    marginTop: getHeight(20),
  },
  profilePhoto: {
    height: getHeight(55),
    width: getWidth(55),
    resizeMode: 'contain',
  },
  chat: {
    flexDirection: 'row',
    alignItems: 'center',
    height: getHeight(103),
    width: getWidth(375),
    paddingHorizontal: getWidth(20),
  },
  nameAndMessageContainer: {
    marginLeft: getWidth(15),
  },
  name: {
    fontSize: getHeight(18),
    fontFamily: fontFamily.FONT_FAMILY_BOLD,
    color: colors.BLACK,
  },
  message: {
    color: colors.ROYAL_PURPLE,
    marginTop: getHeight(5),
  },
  next: {
    marginLeft: 'auto',
    height: getHeight(12),
    width: getWidth(12),
    resizeMode: 'contain',
  },
})

export default styles
