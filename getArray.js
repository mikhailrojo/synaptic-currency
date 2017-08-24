var Parser = require('node-dbf');


const getArray = (name) => {
	return new Promise((resolve) => {
		const arr = [];
		const currencyParser = new Parser(`./currency/${name}.dbf`);
		currencyParser.on('record', (record) => arr.push(record.CURS));
		currencyParser.on('end', () => resolve(arr));
		currencyParser.parse();
	});
};

module.exports = getArray;