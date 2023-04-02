import React, { useEffect, useState } from "react";
import EmojiCard from "../../components/EmojiCard/EmojiCard";
import { pairs } from "../../assets/pairs";
import EmojiGrid from "../../components/EmojiGrid/EmojiGrid";
import { GameContext } from "../../context/ContextProvider";
import { useContext } from "react";
import { getRandomInt } from "../../utils/utils";
const GameScreen = () => {
  const {
    context: { level },
    dispatch,
  } = useContext(GameContext);
  const [levelData, setLevelData] = useState([]);
  const [usedPairsIds, setUsedPairsIds] = useState([]);
  const getLvlData = (emojiData) => {
    const emojiPairsPool = emojiData.filter((pair) => {
      return pair.difficulty_index == 1;
    });
    const resultData = [];
    let usedIds = [];
    let pairsNeeded = 3;
    while (resultData.length <= pairsNeeded) {
      let index = getRandomInt(0, emojiPairsPool.length - 1);
      let targetPair = emojiPairsPool[index];
      let targetPairId = Object.values(targetPair).join("");
      let pairAlreadySelected =
        usedPairsIds.includes(targetPairId) || usedIds.includes(targetPairId);
      if (pairAlreadySelected) return;
      resultData.push(targetPair);
      usedIds.push(targetPairId);
    }
    setLevelData(resultData);
    setUsedPairsIds((prev) => {
      return [...prev, ...usedIds];
    });
  };
  useEffect(() => {
    console.log("pula", level);
    getLvlData(pairs);
  }, [level, pairs]);

  return <EmojiGrid emojiData={levelData} />;
};

export default GameScreen;
