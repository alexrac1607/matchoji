import React from 'react'
import MenuButton from '../../atoms/MenuButton'
import { labels } from '../../constants/labels'
import styles from "../../styles/utils.modules.scss";

const ModeScreen = ({navigation}) => {
  return (
    <div className={styles.menu}>
    <MenuButton btnLabel={labels.CLASSIC_GAMEMODE} mainAction={() => navigation.navigate('GameScreen')}/>
    </div>
  )
}

export default ModeScreen