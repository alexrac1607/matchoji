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
        livesLeft: 3,
        permittedFail: 0,
        currentEmojis: [],
        usedEmojis: [],
      }
    }
    case `get-level-data`: {
      const calcTier = Math.floor(state.level / 10)
      const { tierDifficultyIndex, intPairs, permittedFail } = tiers[calcTier]

      const emojiPairsPool = pairs.filter((pair) => {
        return pair.difficulty_index === tierDifficultyIndex
      })
      const resultData = []
      let usedIds = [...state.usedEmojis]
      while (resultData.length <= intPairs) {
        let index = getRandomInt(0, emojiPairsPool.length - 1)
        let targetPair = emojiPairsPool[index]
        let targetPairId = Object.values(targetPair).join('')
        if (usedIds.includes(targetPairId)) continue
        resultData.push(targetPair)
        usedIds.push(targetPairId)
      }
      return {
        ...state,
        currentEmojis: resultData,
        usedEmojis: [...usedIds],
        permittedFail: permittedFail,
        
      }
    }
    case `push-used-emojis`: {
      return { ...state, usedEmojis: [...action.payload] }
    }
    case `decrease-life`: {
      return {...state, livesLeft: state.livesLeft - 1}
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
    usedEmojis: [],
  })
  const value = { context, dispatch }

  return (
    <>
      <GameContext.Provider value={value}>{children}</GameContext.Provider>
    </>
  )
}
