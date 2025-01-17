#!/usr/bin/node
const agrs = process.argv;

const firstarg = agrs[2];

if (firstarg) {
  console.log(firstarg);
} else {
  console.log('No argument');
}
