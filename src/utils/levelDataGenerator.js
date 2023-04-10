// import { pairs } from '../assets/pairs'
// import { tiers } from '../constants/tiers'
// import { getRandomInt } from './utils'

// export const getLvlData = (level = 0) => {
//   const calcTier = Math.floor(level / 10)
//   const { tierDifficultyIndex, intPairs, intLives } = tiers[calcTier]
//   let usedPairsIds = []
//   const emojiPairsPool = pairs.filter((pair) => {
//     return pair.difficulty_index == tierDifficultyIndex
//   })
//   const resultData = []
//   let usedIds = []
//   while (resultData.length <= intPairs) {
//     let index = getRandomInt(0, emojiPairsPool.length - 1)
//     let targetPair = emojiPairsPool[index]
//     let targetPairId = Object.values(targetPair).join('')
//     let pairAlreadySelected =
//       usedPairsIds.includes(targetPairId) || usedIds.includes(targetPairId)
//     if (pairAlreadySelected) continue
//     resultData.push(targetPair)
//     usedIds.push(targetPairId)
//   }
//   return resultData
// //   setUsedPairsIds((prev) => {
// //     return [...prev, ...usedIds];
// //   });
// }
