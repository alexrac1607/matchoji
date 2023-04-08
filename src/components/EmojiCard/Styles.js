import { StyleSheet } from "react-native";
import config from "../../styles/config";

export default StyleSheet.create({
	emojiCard: { height: 50, width: 50 },
	emoji: {
		fontSize: 40,
		backgroundColor: "grey",
		borderRadius: 10,
	},
	selected: {
		outlineColor: `${config.colorBorder}`,
		outlineStyle: "solid",
		outlineWidth: 4,
		borderRadius: 10,
	},
	disabled: {
		opacity: "30%"
	},
});
