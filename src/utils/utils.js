export const randomizeArray = (array) => {
	let resultArr = [...array];
	for (let i = resultArr.length - 1; i > 0; i--) {
		const j = Math.floor(Math.random() * (i + 1));
		const temp = resultArr[i];
		resultArr[i] = resultArr[j];
		resultArr[j] = temp;
	}
	return resultArr;
};

export const getRandomInt = function (min, max) {
	//MIN and MAX are inclussive
	min = Math.ceil(min);
	max = Math.floor(max);
	return Math.floor(Math.random() * (max - min + 1) + min);
};

export const styleBuilder = (...styles) => {
	let result = {};
	styles.forEach((object) => {
		Object.assign(result, object);
	});
	return result;
};
