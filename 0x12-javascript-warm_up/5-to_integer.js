#!/usr/bin/node

const args = process.argv;

const firstarg = parseInt(args[2]);
if (firstarg) {
  console.log('My number: ' + firstarg);
} else {
  console.log('Not a number');
}
