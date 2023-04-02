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
