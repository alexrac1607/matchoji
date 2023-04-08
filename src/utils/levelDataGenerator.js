import { pairs } from "../assets/pairs";
import { getRandomInt } from "./utils";

export const getLvlData = () => {
	let usedPairsIds = [];
	const emojiPairsPool = pairs.filter((pair) => {
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
		if (pairAlreadySelected) continue;
		resultData.push(targetPair);
		usedIds.push(targetPairId);
	}
	return resultData;
	// setUsedPairsIds((prev) => {
	//   return [...prev, ...usedIds];
	// });
};
