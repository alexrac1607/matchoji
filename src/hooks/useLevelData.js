import { useContext } from 'react'
import { tiers } from '../constants/tiers'
import { getRandomInt } from '../utils/utils'
import { pairs } from '../assets/pairs'
import { GameContext } from '../context/ContextProvider'

export function useLevelData() {
  const {
    context: {level, currentEmojis, usedEmojis },
    dispatch,
  } = useContext(GameContext)
  const calcTier = Math.floor(level / 10)
  const { tierDifficultyIndex, intPairs, intLives } = tiers[calcTier]
  let usedPairsIds = []
  const emojiPairsPool = pairs.filter((pair) => {
    return pair.difficulty_index == tierDifficultyIndex
  })
  const resultData = []
  let usedIds = [...usedEmojis]
  while (resultData.length <= intPairs) {
    let index = getRandomInt(0, emojiPairsPool.length - 1)
    let targetPair = emojiPairsPool[index]
    let targetPairId = Object.values(targetPair).join('')
    let pairAlreadySelected =
      usedPairsIds.includes(targetPairId) || usedIds.includes(targetPairId)
    if (pairAlreadySelected) continue
    resultData.push(targetPair)
    usedIds.push(targetPairId)
  }
  dispatch({
    type: 'push-used-emojis',
    payload: usedIds,
  })
  return resultData
}
