var jaccard = require('jaccard');
 
var a = [
 't1',
 't2',
 't3'
];
 
var b = [
  't3',
  't4',
  't5'
];



console.log(jaccard.index(a, b));