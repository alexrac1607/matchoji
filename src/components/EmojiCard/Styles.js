import { StyleSheet } from 'react-native'
import config from '../../styles/config'

export default StyleSheet.create({
  emojiCard: {
    height: 65,
    width: 65,
    // backgroundColor: 'red',
    // padding: 30,
    borderRadius: 10,
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  emoji: {
    height: 55,
    width: 55,
    fontSize: 40,
    backgroundColor: 'grey',
    borderRadius: 10,
  },
  selected: {
    backgroundColor: 'green',
  },
  disabled: {
    // opacity: 0.3,
  },
})
