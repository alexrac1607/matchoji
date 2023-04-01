import EmojiCard from "../EmojiCard/EmojiCard";
import React, { useState, useEffect } from "react";
import classes from "./EmojiGrid.module.scss";
const EmojiGrid = ({ numberColumns, numberRows, emojiData }) => {
  const [selectedEmojis, setSelectedEmojis] = useState([]);
  const [levelState, setLevelState] = useState([]);
  const handleEmojiSelection = (emojiUnicode, column) => {
    setSelectedEmojis((prev) => {
      if (prev[0]?.emoji === emojiUnicode) {
        return [];
      }
      if (
        prev.some((elem) => {
          return elem.column === column;
        }) ||
        prev.length === 0
      ) {
        return [{ emoji: emojiUnicode, column: column }];
      }
      return [...prev, { emoji: emojiUnicode, column: column }];
    });
  };

  const checkPair = () => {
    const [{ emoji: emoji1 }, { emoji: emoji2 }] = selectedEmojis;
    const foundPair = emojiData.find((emojiObj) => {
      console.log(
        emojiObj.emoji === emoji1 || emojiObj.associated_emoji === emoji1
      );
      return emojiObj.emoji === emoji1 || emojiObj.associated_emoji === emoji1;
    });
    const pairIsValid = Object.values(foundPair).includes(emoji2);
    return pairIsValid;
  };

  useEffect(() => {
    if (selectedEmojis.length > 1) {
      checkPair();
    }
  }, [selectedEmojis.length > 1]);

  const rows = emojiData.length;

  const renderedEmojis = emojiData.map((emoji) => {
    return (
      <>
        <EmojiCard
          selected={selectedEmojis.some((element) => {
            return element.emoji === emoji.emoji;
          })}
          handleSelection={handleEmojiSelection}
          emojiUnicode={emoji.emoji}
          key={emoji.emoj}
          column={1}
        />
        <EmojiCard
          selected={selectedEmojis.some((element) => {
            return element.emoji === emoji.associated_emoji;
          })}
          handleSelection={handleEmojiSelection}
          emojiUnicode={emoji.associated_emoji}
          key={emoji.associated_emoji}
          column={2}
        />
      </>
    );
  });

  return <div className={classes.emojiGrid}>{renderedEmojis}</div>;
};

export default EmojiGrid;
