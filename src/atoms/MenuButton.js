import React from 'react'
import { Button, Image, ImageBackground, Pressable, Text } from 'react-native'
import styles from './styles.js'
import button from '../assets/orangeButton.png'
const MenuButton = ({ btnLabel, mainAction }) => {
  return (
    <Pressable
      style={styles.wrapper}
      onPress={() => {
        mainAction()
      }}
    >
      <Image style={styles.image} source={button}></Image>
      <Text style={styles.text}>{btnLabel}</Text>
    </Pressable>
  )
  return (
    <Button
      onPress={() => {
        mainAction()
      }}
      title={btnLabel}
    ></Button>
  )
}

export default MenuButton
