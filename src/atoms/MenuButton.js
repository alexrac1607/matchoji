import React from "react";
import { Button } from "react-native";
const MenuButton = ({ btnLabel, mainAction }) => {
  return (
    <Button
      onPress={() => {
        mainAction();
      }}
      title={btnLabel}
    ></Button>
  );
};

export default MenuButton;
