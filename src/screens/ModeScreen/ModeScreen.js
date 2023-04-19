import React from "react";
import MenuButton from "../../atoms/MenuButton";
import { labels } from "../../constants/labels";
import { View } from "react-native";
const ModeScreen = ({ navigation }) => {
  return (
    <View >
      <MenuButton
        btnLabel={labels.CLASSIC_GAMEMODE}
        mainAction={() => navigation.navigate("GameScreen")}
      />
    </View>
  );
};

export default ModeScreen;
