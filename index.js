const {Architect, Trainer} = require('synaptic');
const myNetwork = new Architect.Perceptron(5, 5, 1);
const trainer = new Trainer(myNetwork);
const trainingSet = require('./trainingSet');
const on2408 = [
	46.6021,
	30.5948,
	69.7434,
	54.0879,
	61.2783,
	59.1397
];


trainingSet
	.then((set) => {
		console.log(`Training started with ${set.length} sets for training`);
		console.log(set[0]);
		trainer.train(set)
		console.log(`Training ended`);
	})
	.then(() => console.log(myNetwork.activate(on2408)))
	.catch((error) => console.log(error));



// подготовить данные для персептрона
// 6 валют на входе и один параметр на выходе - погода

// сосчитать кол-во данных
// вывести данные последнего дня




