import React from "react";
import styles from "../../styles/utils.modules.scss";
import MenuButton from "../../atoms/MenuButton";
import { labels } from "../../constants/labels";
import { View } from "react-native";

const MainMenuScreen = ({ navigation }) => {
  return (
    <View className={styles.menu}>
      <MenuButton
        btnLabel={labels.PLAY_BUTTON}
        mainAction={() => {
          navigation.navigate("ModeScreen");
        }}
      ></MenuButton>
      <MenuButton btnLabel={labels.SETTINGS_BUTTON}></MenuButton>
      <MenuButton btnLabel={labels.CREDITS_BUTTON}></MenuButton>
    </View>
  );
};

export default MainMenuScreen;
