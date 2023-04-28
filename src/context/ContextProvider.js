import { createContext, useReducer, useState } from 'react'
import { tiers } from '../constants/tiers'
import { pairs } from '../assets/pairs'
import { getRandomInt } from '../utils/utils'

export const GameContext = createContext()

const reducerFn = (state, action) => {
  switch (action.type) {
    case `increase-level`: {
      return {
        ...state,
        level: state.level + 1,
      }
    }
    case `reset-context`: {
      return {
        level: 1,
        score: 0,
        tier: 1,
        livesLeft: 3,
        permittedFail: 0,
        currentEmojis: [],
        usedPairs: [],
      }
    }
    case `get-level-data`: {
      const calcTier = Math.floor(state.level / 20)
      const { tierDifficultyIndex, intPairs, permittedFail } = tiers[calcTier]
      const emojiPairsPool = pairs.filter((pair) => {
        return pair.difficulty_index === tierDifficultyIndex
      })
      const resultData = []
      let usedPairs = [...state.usedPairs]
      const thisLvlUsedEmojis = []
      while (resultData.length < intPairs) {
        let index = getRandomInt(0, emojiPairsPool.length - 1)
        let targetPair = emojiPairsPool[index]
        let targetPairId = Object.values(targetPair).join('')
        const emoji1 = targetPair.associated_emoji
        const emoji2 = targetPair.emoji
        console.log('pula', emoji1, emoji2, thisLvlUsedEmojis)
        if (
          usedPairs.includes(targetPairId) ||
          thisLvlUsedEmojis.includes(emoji1) ||
          thisLvlUsedEmojis.includes(emoji2)
        ) {
          continue
        }
        resultData.push(targetPair)
        usedPairs.push(targetPairId)
        thisLvlUsedEmojis.push(emoji1, emoji2)
      }
      return {
        ...state,
        currentEmojis: resultData,
        usedPairs: [...usedPairs],
        permittedFail: permittedFail,
      }
    }
    case `push-used-emojis`: {
      return { ...state, usedPairs: [...action.payload] }
    }
    case `decrease-life`: {
      return { ...state, livesLeft: state.livesLeft - 1 }
    }
    case 'increase-tier': {
      return { ...state, tier: state.tier + 1, usedPairs: [] }
    }
  }
}

export const ContextProvider = ({ children }) => {
  const [context, dispatch] = useReducer(reducerFn, {
    level: 1,
    score: 0,
    livesLeft: 3,
    permittedFail: 0,
    currentEmojis: [],
    usedPairs: [],
  })
  const value = { context, dispatch }

  return (
    <>
      <GameContext.Provider value={value}>{children}</GameContext.Provider>
    </>
  )
}
