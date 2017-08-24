const getArray = require('./getArray');
const arrayOfCurrencies = [
	'australia',
	'belorus',
	'eur',
	'japan',
	'swiss',
	'usd'
];
const obj = {};


module.exports = new Promise((resolve) => {


	arrayOfCurrencies.forEach(async (currency) => {
		const curr = await getArray(currency);
		if (currency !== 'usd') {
			return obj[currency] = curr;
		} else {
			return startTraining(obj, curr);
		}
	});

	const trainingSet1 = [
		{
			input: [1, 2, 3, 4, 5, 6],
			output: [0]
		}
	];
	const TrainingSet = [];
	for(var i = 0; i < 2481; i ++) {
		TrainingSet.push({
			input: [],
			output: []
		});
	}


	function startTraining(obj, result) {
		Object.keys(obj).forEach((key) => {
			const country = obj[key];
			country.forEach((key, index) => TrainingSet[index].input.push(key));
		});
		result.forEach((key, index) => TrainingSet[index].output.push(key));
		resolve(TrainingSet);
	}
});



