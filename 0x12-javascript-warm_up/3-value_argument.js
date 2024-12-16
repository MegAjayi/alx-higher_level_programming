#!/usr/bin/node
let agrs = process.argv;

let firstarg = agrs[2];

if (firstarg) {
	console.log(firstarg);
} else {
	console.log('No argument');
}

