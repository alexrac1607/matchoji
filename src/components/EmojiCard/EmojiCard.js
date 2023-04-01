import React from "react";
import styles from "./EmojiCard.module.scss";
import emojis from "../../assets/emojiData";
const EmojiCard = ({
  column,
  handleSelection,
  emojiUnicode,
  selected = false,
}) => {
  const emoji = emojis.find((el) => el.code === emojiUnicode).emoji;
  const handleEmojiSelection = () => {
    handleSelection(emojiUnicode, column);
  };
  return (
    <div
      onPress={handleEmojiSelection}
      className={
        selected ? { ...styles.card, ...styles.selected } : { ...styles.card }
      }
    >
      <span>{emoji}</span>
    </div>
  );
};

export default EmojiCard;
