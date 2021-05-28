// const amount = 12

// if (amount < 10){
//     console.log('small number');
// }
// else{
//     console.log('large number');
// }

// console.log(`hey it's my blog`)
// var msg = 'Hello World';
// console.log(msg);
// console.log(__dirname);
// setInterval(() => {
//     console.log('hello world')
// }, 1000);
const names = require('./name')
const sayhi = require('./5-utils')
const data = require('./6-alternative-flavor')
require('./7-mind-grendade')
// console.log(data)
// console.log(names)

sayhi('Bao')
sayhi(names.john)
sayhi(names.peter)