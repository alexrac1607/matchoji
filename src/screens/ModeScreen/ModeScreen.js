import React from 'react'
import MenuButton from '../../atoms/MenuButton'
import { labels } from '../../constants/labels'
import styles from '../../styles/utils.modules.scss'
import { View } from 'react-native'
import Menu from '../../atoms/Menu'
const ModeScreen = ({ navigation }) => {
  return (
    <Menu>
      <MenuButton
        btnLabel={labels.CLASSIC_GAMEMODE}
        mainAction={() => navigation.navigate('GameScreen')}
      />
    </Menu>
  )
}

export default ModeScreen
