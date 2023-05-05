import React, { useEffect, useState } from 'react'
import EmojiGrid from '../../components/EmojiGrid/EmojiGrid'
import { GameContext } from '../../context/ContextProvider'
import { useContext } from 'react'
import CustomModal from '../../components/Modal/Modal'
import styles from './styles'
import { View } from 'react-native'
import { ImageBackground } from 'react-native'
import backgroundImage from '../../assets/gameBcgImg.jpg'
const GameScreen = () => {
  const {
    context: { level, currentEmojis, livesLeft },
    dispatch,
  } = useContext(GameContext)
  const [showModal, setShowModal] = useState(false)

  useEffect(() => {
    dispatch({ type: `get-level-data` }) // pairs are all pairs with diff index 1
  }, [level])

  useEffect(() => {
    if (!livesLeft) setShowModal(true)
  }, [livesLeft])

  return (
    <View style={styles.background}>
      <ImageBackground
        source={backgroundImage}
        resizeMode="cover"
        style={styles.backgroundImg}
      ></ImageBackground>
      <CustomModal
        customStyle={{ borderWidth: 5, borderColor: 'red' }}
        mainMessage="You died"
        btnMessage="start again"
        isVisible={showModal}
        setIsVisible={setShowModal}
      ></CustomModal>
      {currentEmojis?.length > 0 ? (
        <EmojiGrid emojiData={currentEmojis} />
      ) : null}
    </View>
  )
}

export default GameScreen
