import React from "react";
import styles from "./EmojiCard.module.scss";
import emojis from "../../assets/emojiData";
import { View, Text } from "react-native";
const EmojiCard = ({
  column,
  handleSelection,
  emojiUnicode,
  selected = false,
  id,
  disabled,
}) => {
  const emoji = emojis.find((el) => el.code === emojiUnicode)?.emoji;
  const handleEmojiSelection = (e) => {
    handleSelection(emojiUnicode, column);
  };
  return (
    <View
      onPress={handleEmojiSelection}
      className={
        selected ? { ...styles.card, ...styles.selected } : { ...styles.card }
      }
    >
      <Text
        id={id}
        className={styles.emoji}
        // className={disabled ? styles.disabled : null}
      >
        {emoji ? emoji : "pula"}
      </Text>
    </View>
  );
};

export default EmojiCard;
