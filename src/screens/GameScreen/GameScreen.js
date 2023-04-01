import React from "react";
import EmojiCard from "../../components/EmojiCard/EmojiCard";
import { pairs } from "../../assets/pairs";
import EmojiGrid from "../../components/EmojiGrid/EmojiGrid";
const GameScreen = () => {
  return <EmojiGrid emojiData={pairs} />;
};

export default GameScreen;
