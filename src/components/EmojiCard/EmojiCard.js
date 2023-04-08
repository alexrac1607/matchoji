import React from "react";
import styles from "./Styles";
import emojis from "../../assets/emojiData";
import { View, Text, Pressable } from "react-native";
import { useRef } from "react";
import { LogBox } from "react-native";
import { styleBuilder } from "../../utils/utils";

const EmojiCard = ({
	column,
	handleSelection,
	emojiUnicode,
	id,
	selected = false,
	disabled,
	gridRef,
	solved,
}) => {
	const emoji = emojis.find((el) => el.code === emojiUnicode)?.emoji;
	const ref = useRef();

	let selectStyle = selected ? styles.selected : null;
	let solvedStyle = { backgroundColor: solved };
	let disabledStyle = disabled ? styles.disabled : null;

	let concStyle = styleBuilder(selectStyle, solvedStyle);
	let emojiConcStyle = styleBuilder(disabledStyle, styles.emoji);
	const handleEmojiSelection = (e) => {
		ref.current.measureLayout(gridRef.current, (x, y, width, height) => {
			const coords = { x: x + width / 2, y: y + height + height / 2 };
			handleSelection(emojiUnicode, column, coords);
		});
	};
	return (
		<Pressable onPress={handleEmojiSelection}>
			<View
				ref={ref}
				// onPress={handleEmojiSelection}
				// className={
				//   selected ? { ...styles.emojiCard, ...styles.selected } : { ...styles.card }
				// }
				style={concStyle}
			>
				<Text
					// onPress={handleEmojiSelection}
					id={id}
					style={emojiConcStyle}
					// className={disabled ? styles.disabled : null}
				>
					{emoji}
      
				</Text>
			</View>
		</Pressable>
	);
};

export default EmojiCard;
