import React, { useEffect, useState } from 'react'
import EmojiGrid from '../../components/EmojiGrid/EmojiGrid'
import { GameContext } from '../../context/ContextProvider'
import { useContext } from 'react'
import Modal from '../../components/Modal/Modal'
import CustomModal from '../../components/Modal/Modal'

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
    <>
      <CustomModal isVisible={showModal} setIsVisible={setShowModal}></CustomModal>
      {currentEmojis?.length > 0 ? (
        <EmojiGrid emojiData={currentEmojis} />
      ) : null}
    </>
  )
}

export default GameScreen
