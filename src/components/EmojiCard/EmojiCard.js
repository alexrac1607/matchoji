import React from 'react'
import styles from './EmojiCard.module.scss'
import emojis from '../../assets/emojiData';

const EmojiCard = ({emojiUnicode, selected = false}) => {
const emoji = emojis.find((el) => el.code === emojiUnicode).emoji
  return (
    <div className={styles.card}>{emoji}</div>
  )
}

export default EmojiCard