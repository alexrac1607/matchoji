import React, { useContext } from 'react'
import { Pressable, Text, View } from 'react-native'
import { GameContext } from '../../context/ContextProvider'
import Ionicons from '@expo/vector-icons/Ionicons'
import { Styles } from './Styles'
import config from '../../styles/config'
const GameHeader = () => {
  const {
    context: { permittedFail, livesLeft, level },
  } = useContext(GameContext)

  const heartSvg = (
    <Ionicons name="heart" size={40} color={config.colorRed}></Ionicons>
  )
  const heartSvgEmpty = (
    <Ionicons name="heart-outline" size={40} color={config.colorRed}></Ionicons>
  )
  let lives = []
  for (let i = 0; i < livesLeft; i++) {
    lives.push(heartSvg)
  }
  for (let i = 0; i < 3 - livesLeft; i++) {
    lives.push(heartSvgEmpty)
  }
  const settingsIcon = (
    <Ionicons
      name="settings"
      size={40}
      color={config.colorDarkOrange}
    ></Ionicons>
  )
  return (
    <View style={Styles.header}>
      <View>
        <View style={Styles.hearts}>{lives}</View>
      </View>
      <Text style={Styles.level}>Lvl: {level}</Text>
      <Pressable>
        <View>
          <View style={Styles.hearts}>{settingsIcon}</View>
        </View>
      </Pressable>
    </View>
  )
}
export default GameHeader
