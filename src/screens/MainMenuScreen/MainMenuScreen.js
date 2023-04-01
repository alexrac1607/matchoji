import React from "react";
import styles from "../../styles/utils.modules.scss";
import MenuButton from "../../atoms/MenuButton";
import { labels } from "../../constants/labels";

const MainMenuScreen = ({ navigation }) => {
	return (
		<div className={styles.menu}>
			<button onPress={() => {
					console.log("pl");
					navigation.navigate("ModeScreen");
				}}> asdasds
			</button>
			<MenuButton
				btnLabel={labels.PLAY_BUTTON}
				mainAction={() => {
					console.log("pl");
					navigation.navigate("ModeScreen");
				}}
			></MenuButton>
			<MenuButton btnLabel={labels.SETTINGS_BUTTON}></MenuButton>
			<MenuButton btnLabel={labels.CREDITS_BUTTON}></MenuButton>
		</div>
	);
};

export default MainMenuScreen;
