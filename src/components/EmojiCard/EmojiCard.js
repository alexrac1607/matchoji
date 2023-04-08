import React from "react";
import styles from "./Styles";
import emojis from "../../assets/emojiData";
import { View, Text, Pressable } from "react-native";
import { useRef } from "react";
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
  const ref = useRef()

  const handleEmojiSelection = (e) => {
    console.log(e.target.closest("*"));
    ref.current.measure((x, y, width, height, pagex, pagey) => {
      console.log(x, y, width, height, pagex, pagey)
      const coords = {x: pagex + width / 2, y: pagey + height + height / 2}
      handleSelection(emojiUnicode, column, coords);
    })
    // const coords = { x: e.nativeEvent.pageX, y: e.nativeEvent.pageY };

  };
  return (
    <Pressable onPress={handleEmojiSelection}>
      <View ref={ref}
        // onPress={handleEmojiSelection}
        // className={
        //   selected ? { ...styles.emojiCard, ...styles.selected } : { ...styles.card }
        // }
        style= {selected ? { ...styles.emojiCard, ...styles.selected } : { ...styles.emojiCard }}
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
