#!/usr/bin/node

const script = process.argv;

if (script.length < 3) {
  console.log('No argument');
} else if (script.length === 3) {
  console.log('Argument found');
} else {
  console.log('Arguments found');
}
