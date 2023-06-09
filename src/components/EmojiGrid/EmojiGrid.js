import EmojiCard from '../EmojiCard/EmojiCard'
import React, { useState, useEffect, useMemo, useContext, useRef } from 'react'
import config from '../../styles/config'
import styles from './Styles'
import { View, Dimensions } from 'react-native'
import { randomizeArray } from '../../utils/utils'
import { GameContext } from '../../context/ContextProvider'
import { Svg, Line, Polyline } from 'react-native-svg'
import { styleBuilder } from '../../utils/utils'
const EmojiGrid = ({ emojiData }) => {
  const [selectedEmojis, setSelectedEmojis] = useState([])
  const [isFail, setIsFail] = useState(false)
  const [levelState, setLevelState] = useState([])
  const {
    context: { permittedFail, livesLeft, level },
    dispatch,
  } = useContext(GameContext)
  const gridRef = useRef()

  const handleEmojiSelection = (emojiUnicode, column, coords) => {
    let isEmojiSelected
    levelState.forEach((el) => {
      let levelStateValues = Object.values(el)
      levelStateValues.forEach((el) => {
        if (el === emojiUnicode) isEmojiSelected = true
      })
    })

    if (isEmojiSelected) return

    setSelectedEmojis((prev) => {
      if (prev[0]?.emoji === emojiUnicode) {
        return []
      }
      if (
        prev.some((elem) => {
          return elem.column === column
        }) ||
        prev.length === 0
      ) {
        return [{ emoji: emojiUnicode, column: column, coords: coords }]
      }
      return [...prev, { emoji: emojiUnicode, column: column, coords: coords }]
    })
  }
  //TO DO : refactor
  const checkPair = () => {
    const [
      { emoji: emoji1, coords: coords1 },
      { emoji: emoji2, coords: coords2 },
    ] = selectedEmojis
    const foundPair = emojiData.find((emojiObj) => {
      return emojiObj.emoji === emoji1 || emojiObj.associated_emoji === emoji1
    })
    const isValidPair = Object.values(foundPair).includes(emoji2)
    setLevelState((prev) => {
      return [
        ...prev,
        {
          start: emoji1,
          end: emoji2,
          isValidPair: isValidPair,
          disabled: true,
          startX: coords1.x,
          startY: coords1.y,
          endX: coords2.x,
          endY: coords2.y,
        },
      ]
    })

    return isValidPair
  }
  useEffect(() => {
    if (level % 20 === 0) {
      dispatch({ type: 'increase-tier' })
    }
  }, [level])
  useEffect(() => {
    if (selectedEmojis.length > 1) {
      checkPair()
    }
  }, [selectedEmojis.length > 1])

  const renderedLeftEmojis = emojiData.map((emoji) => {
    let curPair = levelState.find((element) => {
      return element.start === emoji.emoji || element.end === emoji.emoji
    })
    return (
      <>
        <EmojiCard
          solved={
            curPair?.isValidPair === true
              ? 'green'
              : curPair?.isValidPair === false
              ? 'red'
              : null
          }
          gridRef={gridRef}
          id={emoji.emoji}
          emojiUnicode={emoji.emoji}
          key={emoji.emoji}
          selected={selectedEmojis.some((element) => {
            return element.emoji === emoji.emoji
          })}
          handleSelection={handleEmojiSelection}
          column={1}
          disabled={curPair}
        />
      </>
    )
  })

  const preparedArr = useMemo(() => {
    return randomizeArray(emojiData)
  }, [emojiData])

  const renderedRightEmojis = preparedArr.map((emoji) => {
    let curPair = levelState.find((element) => {
      return (
        element.start === emoji.associated_emoji ||
        element.end === emoji.associated_emoji
      )
    })
    return (
      <>
        <EmojiCard
          solved={
            curPair?.isValidPair === true
              ? 'green'
              : curPair?.isValidPair === false
              ? 'red'
              : null
          }
          gridRef={gridRef}
          id={emoji.associated_emoji}
          selected={selectedEmojis.some((element) => {
            return element.emoji === emoji.associated_emoji
          })}
          handleSelection={handleEmojiSelection}
          emojiUnicode={emoji.associated_emoji}
          key={emoji.associated_emoji}
          column={2}
          disabled={levelState.find((element) => {
            return (
              element.start === emoji.associated_emoji ||
              element.end === emoji.associated_emoji
            )
          })}
        />
      </>
    )
  })

  const resetLevelState = () => {
    setSelectedEmojis([])
    setIsFail(false)
    setLevelState([])
  }
  const lineGenerator = () => {
    let result = levelState.map((pair) => {
      const { width, height } = Dimensions.get('window')
      return (
        <View
          style={{
            position: 'absolute',
            zIndex: -1,
            backgroundColor: 'transparent',
          }}
        >
          <Svg height={height} width={width}>
            <Line
              x2={pair.startX}
              y2={pair.startY - 55}
              x1={pair.endX}
              y1={pair.endY - 55}
              stroke={pair.isValidPair ? config.correctPair : config.wrongPair}
              strokeWidth="10"
            />
          </Svg>
        </View>
      )
    })
    return result
  }

  useEffect(() => {
    generatedLines = lineGenerator()
    let invalidPairsArray = levelState.filter((obj) => {
      return obj.isValidPair === false
    })

    if (invalidPairsArray.length > permittedFail) {
      setIsFail(true)
      dispatch({ type: 'decrease-life' })

      dispatch({ type: `get-level-data` })
      resetLevelState()
    }

    if (!livesLeft) {
      dispatch({ type: `reset-context` })
    }

    if (levelState.length === emojiData.length && emojiData.length !== 0) {
      dispatch({ type: `increase-level` })
      resetLevelState()
    }
  }, [levelState])

  let generatedLines = lineGenerator()

  return (
    <View
      style={{
        transform: [
          { translateX: Dimensions.get('window').width * 0.3 },
          { translateY: Dimensions.get('window').height * 0.1 },
        ],
        ...styleBuilder(styles.flexDirectionRow, styles.grid),
      }}
      ref={gridRef}
    >
      {generatedLines}
      <View style={styles.column}>{renderedLeftEmojis}</View>
      <View style={styles.column}>{renderedRightEmojis}</View>
    </View>
  )
}

export default EmojiGrid
