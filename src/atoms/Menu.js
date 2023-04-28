import React from 'react'
import { View } from 'react-native'
import styles from './MenuStyles'
const Menu = ({ children }) => {
  return <View style={styles.menu}>{children}</View>
}

export default Menu
