import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  flexDirectionRow: {
    flexDirection: 'row',
    gap: 100,
    // flexShrink: 0,
    // flexGrow: 0,
    // aspectRatio: 1,
  },
  column: {
    justifyContent: 'flex-start',
    alignContent: 'center',
    gap: 20,
  },
  grid: {
    position: 'absolute',
    top: '0%',
    right: '48%',
  },
})
