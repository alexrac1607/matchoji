import React from "react";
import styles from "./Styles";
import emojis from "../../assets/emojiData";
import { View, Text, Pressable } from "react-native";

import { LogBox } from "react-native";

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
    console.log(e.target.closest("*"));
    const coords = { x: e.nativeEvent.pageX, y: e.nativeEvent.pageY };
    handleSelection(emojiUnicode, column, coords);
  };
  return (
    <Pressable onPress={handleEmojiSelection}>
      <View
        // onPress={handleEmojiSelection}
        // className={
        //   selected ? { ...styles.card, ...styles.selected } : { ...styles.card }
        // }
        style={styles.emojiCard}
      >
        <Text
          // onPress={handleEmojiSelection}
          id={id}
          className={styles.emoji}
          // className={disabled ? styles.disabled : null}
        >
          {emoji ? emoji : "pula"}
        </Text>
      </View>
    </Pressable>
  );
};

export default EmojiCard;
