import { StyleSheet } from 'react-native'

const btn = {
  width: '100%',
  height: 100,
}

const content = { position: 'absolute' }

const styles = StyleSheet.create({
  wrapper: {
    ...btn,
  },
  image: {
    ...content,
    ...btn,
    top: '0%',
    left: '0%',
    resizeMode: `contain`,
  },
  text: {
    ...content,
    width: 220,
    top: '50%',
    right: '50%',
    // backgroundColor: 'red',
    transform: [{ translateX: 110 }, { translateY: -23 }],
    textAlign: 'center',
    fontSize: 32,
    color: '#fff',
  },
})

export default styles
