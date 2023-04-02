import EmojiCard from "../EmojiCard/EmojiCard";
import React, { useState, useEffect, useMemo, useCallback } from "react";
import classes from "./EmojiGrid.module.scss";
import { View } from "react-native";
import Xarrow, { useXarrow, Xwrapper } from "react-xarrows";
import { randomizeArray } from "../../utils/utils";

const EmojiGrid = ({ numberColumns, numberRows, emojiData, lifeCounter = 2 }) => {
	const [selectedEmojis, setSelectedEmojis] = useState([]);
	const [linePairs, setLinePairs] = useState([]);
  const [isFail, setIsFail] = useState(false)
	const [levelState, setLevelState] = useState([]);

	const [, updateState] = useState();
	const forceUpdate = useCallback(() => updateState({}), []);

	const handleEmojiSelection = (emojiUnicode, column, position) => {
		let isEmojiSelected;
		levelState.forEach((el) => {
			let levelStateValues = Object.values(el);
			levelStateValues.forEach((el) => {
				if (el === emojiUnicode) isEmojiSelected = true;
			});
		});
		if (isEmojiSelected) return;
		setSelectedEmojis((prev) => {
			if (prev[0]?.emoji === emojiUnicode) {
				return [];
			}
			if (
				prev.some((elem) => {
					return elem.column === column;
				}) ||
				prev.length === 0
			) {
				return [{ emoji: emojiUnicode, column: column, position: {} }];
			}
			return [...prev, { emoji: emojiUnicode, column: column }];
		});
	};

	const checkPair = () => {
		const [{ emoji: emoji1 }, { emoji: emoji2 }] = selectedEmojis;
		const foundPair = emojiData.find((emojiObj) => {
			return emojiObj.emoji === emoji1 || emojiObj.associated_emoji === emoji1;
		});
		const isValidPair = Object.values(foundPair).includes(emoji2);
		setLevelState((prev) => {
			return [
				...prev,
				{
					start: emoji1,
					end: emoji2,
					isValidPair: isValidPair,
					disabled: true,
				},
			];
		});

		return isValidPair;
	};

	useEffect(() => {
		if (selectedEmojis.length > 1) {
			checkPair();
		}
	}, [selectedEmojis.length > 1]);

	const renderedLeftEmojis = emojiData.map((emoji) => {
		return (
			<>
				<EmojiCard
					id={emoji.emoji}
					selected={selectedEmojis.some((element) => {
						return element.emoji === emoji.emoji;
					})}
					handleSelection={handleEmojiSelection}
					emojiUnicode={emoji.emoji}
					key={emoji.emoji}
					column={1}
					disabled={levelState.find((element) => {
						return element.start === emoji.emoji || element.end === emoji.emoji;
					})}
				/>
			</>
		);
	});

	const preparedArr = useMemo(() => {
		return randomizeArray(emojiData);
	}, []);

	console.log(levelState);

	const renderedRightEmojis = preparedArr.map((emoji) => {
		return (
			<>
				<EmojiCard
					id={emoji.associated_emoji}
					selected={selectedEmojis.some((element) => {
						return element.emoji === emoji.associated_emoji;
					})}
					handleSelection={handleEmojiSelection}
					emojiUnicode={emoji.associated_emoji}
					key={emoji.associated_emoji}
					column={2}
					disabled={levelState.find((element) => {
						return (
							element.start === emoji.associated_emoji ||
							element.end === emoji.associated_emoji
						);
					})}
				/>
			</>
		);
	});

	const lineGenerator = () => {
		let result = levelState.map((pair) => {
			return (
				<Xarrow
					start={pair.start}
					end={pair.end}
					showHead={false}
					color={pair.isValidPair ? "green" : "red"}
				/>
			);
		});
		return result;
	};

	let generatedLines = lineGenerator();

	useEffect(() => {
		randomizeArray(preparedArr);
	}, []);

	useEffect(() => {
		generatedLines = lineGenerator();
		forceUpdate();
	}, [levelState]);

  useEffect(() => {
    let filteredArr = levelState.filter(obj => {
     return obj.isValidPair === false
    })
    if (filteredArr.length  > lifeCounter) {
      setIsFail(true)
    }
    console.log(filteredArr)
  }, [levelState])

	return (
    <>
	{!isFail &&	<Xwrapper>
			{generatedLines}
			<div className={classes.emojiGrid}>
				<div className={classes.emojiSubgrid}>{renderedLeftEmojis}</div>
				<div className={classes.emojiSubgrid}>{renderedRightEmojis}</div>
			</div>
		</Xwrapper>}
    {isFail && <div>
      Mai incearca sau da 15 dolari</div>}
    </>
	);
};

export default EmojiGrid;
