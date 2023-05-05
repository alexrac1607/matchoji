import React from 'react'
import MenuButton from '../../atoms/MenuButton'
import { labels } from '../../constants/labels'
import Menu from '../../atoms/Menu'

const MainMenuScreen = ({ navigation }) => {
  return (
    <Menu>
      <MenuButton
        btnLabel={labels.PLAY_BUTTON}
        mainAction={() => {
          navigation.navigate('ModeScreen')
        }}
      ></MenuButton>
      <MenuButton btnLabel={labels.SETTINGS_BUTTON}></MenuButton>
      <MenuButton btnLabel={labels.CREDITS_BUTTON}></MenuButton>
    </Menu>
  )
}

export default MainMenuScreen
