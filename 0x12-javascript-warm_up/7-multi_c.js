#!/usr/bin/node

const args = process.argv;
const convert = parseInt(args[2], 10);

if (!isNaN(convert)) {
	for (let i = 0; i < convert; i++)
	{
		console.log('C is fun');
	}
}
else {
	console.log('Missing number of occurrences');
}
