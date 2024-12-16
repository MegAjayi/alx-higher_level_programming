#!/usr/bin/node

const args = process.argv;
const convert = parseInt(args[2], 10);

if (!isNaN(convert)) {
  for (let i = 0; i < convert; i++) {
	  let row = '';
	  for (let j = 0; j < convert; j++) {
		  row += 'X';
	  }
    console.log(row);
  }
} else {
  console.log('Missing number of occurrences');
}
