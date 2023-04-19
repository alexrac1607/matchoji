import React, { useContext } from 'react'
import { Image, Text, View } from 'react-native'
import { GameContext } from '../../context/ContextProvider'
import Heart from './heart.svg'
import { SvgXml } from 'react-native-svg'
import Ionicons from '@expo/vector-icons/Ionicons'
import { Styles } from './Styles'

const GameHeader = () => {
  const {
    context: { permittedFail, livesLeft, level },
  } = useContext(GameContext)

  const heartSvg = <Ionicons name="heart" size={50} color="red"></Ionicons>
  let lives = []
  for (let i = 0; i < livesLeft; i++) {
    lives.push(heartSvg)
  }

  return (
    <View style={Styles.header}>
      <View>
        <View style={Styles.hearts}>{lives}</View>
      </View >
      <Text style={Styles.level}>Level: {level}</Text>
    </View>
  )
}
export default GameHeader
