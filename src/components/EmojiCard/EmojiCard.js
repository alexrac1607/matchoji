import React from 'react'
import styles from './Styles'
import emojis from '../../assets/emojiData'
import { View, Text, Pressable } from 'react-native'
import { useRef } from 'react'
import { LogBox } from 'react-native'
import { styleBuilder } from '../../utils/utils'

const EmojiCard = ({
  column,
  handleSelection,
  emojiUnicode,
  id,
  selected = false,
  disabled,
  gridRef,
  solved,
}) => {
  const emoji = emojis.find((el) => el.code === emojiUnicode)?.emoji
  const ref = useRef()

  let selectStyle = selected ? styles.selected : null
  let solvedStyle = solved ? { backgroundColor: solved } : null
  let disabledStyle = disabled ? styles.disabled : null

  let emojiConcStyle = styleBuilder(disabledStyle, styles.emoji)
  const handleEmojiSelection = (e) => {
    ref.current.measureLayout(gridRef.current, (x, y, width, height) => {
      const coords = { x: x + width / 2, y: y + height + height / 2 }
      handleSelection(emojiUnicode, column, coords)
    })
  }
  const pressableClass = styleBuilder(
    styles.emojiCard,
    styles.centeredView,
    selectStyle,
    solvedStyle
  )
  return (
    <Pressable style={pressableClass} onPress={handleEmojiSelection}>
      <View ref={ref}>
        <Text id={id} style={emojiConcStyle}>
          {emoji}
        </Text>
      </View>
    </Pressable>
  )
}

export default EmojiCard
