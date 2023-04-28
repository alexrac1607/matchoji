import { StyleSheet } from 'react-native'
import config from '../../styles/config'

export default StyleSheet.create({
  emojiCard: {
    height: 95,
    width: 95,
    // backgroundColor: 'red',
    // padding: 30,
    borderRadius: 10,
    backgroundColor: config.colorDarkOrange,
    overflow: 'hidden',
    transform: [
      // { perspective: 850 },
      // { translateX: -22 },
      // { rotateY: '60deg' },
    ],
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  emoji: {
    height: 65,
    width: 65,
    fontSize: 45,
    backgroundColor: config.colorGray,
    borderRadius: 10,
    textAlign: 'center',
    justifyContent: 'center',
  },
  selected: {
    backgroundColor: config.colorBlueGreen,
  },
  disabled: {
    // opacity: 0.3,
  },
  backgroundImg: {
    height: '100%',
    width: '100%',
    position: 'absolute',
    opacity: 0.3,
  },
})
