const {Architect, Trainer} = require('synaptic');
const myNetwork = new Architect.Perceptron(5, 15, 1);
const trainer = new Trainer(myNetwork);
const trainingSet = require('./trainingSet');
const on2408 = [
	46.6021,
	30.5948,
	69.7434,
	54.0879,
	61.2783
]; // today's currency Rates

trainingSet
	.then(({TrainingSet, max}) => {
		console.log(`Training started with ${TrainingSet.length} sets for training`);
		console.log(`First training input: ${TrainingSet[0]}`);
		trainer.train(TrainingSet)
		console.log(`Training ended`);
		return max;
	})
	.then((max) => console.log(`Current USD value supposed to be ${max * myNetwork.activate(on2408)[0]} RUB per 1 USD`))
	.catch((error) => console.log(error));



// подготовить данные для персептрона
// 6 валют на входе и один параметр на выходе - погода

// сосчитать кол-во данных
// вывести данные последнего дня




