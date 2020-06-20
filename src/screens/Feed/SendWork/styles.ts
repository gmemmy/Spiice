import { StyleSheet } from 'react-native'
import colors from '../../../utils/colors'
import { getWidth, getHeight, fontFamily } from '../../../utils/styles'

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
    height: getHeight(160),
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
  uploadImageView: {
    alignItems: 'center',
    marginTop: getHeight(50),
  },
  uploadContainer: {
    height: getHeight(56),
    width: getWidth(343),
    backgroundColor: colors.LILAC,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: getWidth(20),
    borderRadius: getHeight(5),
    justifyContent: 'space-between',
  },
  uploadedImage: {
    height: getHeight(56),
    width: getWidth(343),
    backgroundColor: colors.WHITE,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: getWidth(20),
    borderColor: colors.ROYAL_PURPLE,
    borderWidth: 1,
    marginTop: getHeight(20),
    borderRadius: getHeight(5),
    justifyContent: 'space-between',
  },
  uploadedIcon: {
    height: getHeight(20),
    width: getWidth(20),
    resizeMode: 'contain',
  },
  uploadText: {
    fontSize: getHeight(16),
    fontFamily: fontFamily.FONT_FAMILY_REGULAR,
    color: colors.ROYAL_PURPLE,
  },
  imageTitle: {
    fontSize: getHeight(16),
    fontFamily: fontFamily.FONT_FAMILY_REGULAR,
    color: colors.ROYAL_PURPLE,
  },
})

export default styles
