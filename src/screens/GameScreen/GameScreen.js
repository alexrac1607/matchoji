import React, { useEffect, useState } from "react";
import EmojiCard from "../../components/EmojiCard/EmojiCard";
import { pairs } from "../../assets/pairs";
import EmojiGrid from "../../components/EmojiGrid/EmojiGrid";
import { GameContext } from "../../context/ContextProvider";
import { useContext } from "react";
import { getRandomInt } from "../../utils/utils";
const GameScreen = () => {
  const {
    context: { level, currentEmojis },
    dispatch,
  } = useContext(GameContext);
  const [levelData, setLevelData] = useState([]);
  const [usedPairsIds, setUsedPairsIds] = useState([]);
  console.log(currentEmojis)
  
  useEffect(() => {
    dispatch({ type: `get-level-data` });// pairs are all pairs with diff index 1
  }, [level]);
  return (
    <>
  {currentEmojis?.length > 0 ? <EmojiGrid emojiData={currentEmojis} /> : null}
  </>
  )
};

export default GameScreen;
