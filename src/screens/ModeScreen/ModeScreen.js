import React from "react";
import MenuButton from "../../atoms/MenuButton";
import { labels } from "../../constants/labels";
import styles from "../../styles/utils.modules.scss";
import { View } from "react-native";
const ModeScreen = ({ navigation }) => {
  return (
    <View className={styles.menu}>
      <MenuButton
        btnLabel={labels.CLASSIC_GAMEMODE}
        mainAction={() => navigation.navigate("GameScreen")}
      />
    </View>
  );
};

export default ModeScreen;
