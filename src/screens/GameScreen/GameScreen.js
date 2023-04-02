import React, { useEffect, useState } from "react";
import EmojiCard from "../../components/EmojiCard/EmojiCard";
import { pairs } from "../../assets/pairs";
import EmojiGrid from "../../components/EmojiGrid/EmojiGrid";
import { GameContext } from "../../context/ContextProvider";
import { useContext } from "react";
import { getRandomInt } from "../../utils/utils";
const GameScreen = () => {
  const { level, score } = useContext(GameContext);
  const [levelData, setLevelData] = useState([]);
  const [usedPairsIds, setUsedPairsIds] = useState([]);
  const getLvlData = (emojiData) => {
    const emojiPairsPool = emojiData.filter((pair) => {
      return pair.difficulty_index == 1;
    });
    console.log(emojiPairsPool);
    const resultData = [];
    let pairsNeeded = 3;
    while (resultData.length <= pairsNeeded) {
      let index = getRandomInt(0, emojiPairsPool.length - 1);
      let targetPair = emojiPairsPool[index];
      let targetPairId = Object.values(targetPair).join("");
      let pairAlreadySelected = usedPairsIds.includes(targetPairId);
      if (pairAlreadySelected) return;
      resultData.push(targetPair);
      setUsedPairsIds((prev) => {
        return [...prev, targetPairId];
      });
    }
    setLevelData(resultData);
  };
  useEffect(() => {
    console.log("pula", level);
    getLvlData(pairs);
  }, [level]);

  return <>{levelData && <EmojiGrid emojiData={levelData} />}</>;
};

export default GameScreen;
