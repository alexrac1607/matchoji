import React from "react";
import styles from "./EmojiCard.module.scss";
import emojis from "../../assets/emojiData";
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
    <div
      onPress={handleEmojiSelection}
      className={
        selected ? { ...styles.card, ...styles.selected } : { ...styles.card }
      }
    >
      <span id={id} className={disabled ? styles.disabled : null}>
        {emoji ? emoji : <p>pula</p>}
      </span>
    </div>
  );
};

export default EmojiCard;
