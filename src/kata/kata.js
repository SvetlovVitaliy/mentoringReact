// Given an array of integers, find the one that appears an odd number of times.
//There will always be only one integer that appears an odd number of times.

function findOdd(arr) {
  return arr.find(item => arr.filter(el => el == item).length % 2)
}

//You will have to create a function which takes in a sequence of numbers in random order and you will have to return the correct base of those numbers.
//The sequence will always be 10 numbers long and we know that the base is going to be between 2 and 10 inclusive so no need to worry about any letters. When sorted, the sequence is made up of consecutive numbers.

function baseFinder(seq){
  const a = seq.sort((a,b)=>(a-b));
  for(let i = 0; i<a.length; i++) {
    if(a[i+1]-a[i] !== 1 && (i+1) < a.length) {
      return Number(a[i].slice(-1)) + 1;
    }
    if(i === a.length - 1) {
      return 10;
    }
  }
}

// function baseFinder(seq){
//   seq = seq.join('')
//   if (seq.includes('9')) return 10
//   if (seq.includes('8')) return 9
//   if (seq.includes('7')) return 8
//   if (seq.includes('6')) return 7
//   if (seq.includes('5')) return 6
//   if (seq.includes('4')) return 5
//   if (seq.includes('3')) return 4
//   if (seq.includes('2')) return 3
//   return 2
// }

//There must be a function for each number from 0 ("zero") to 9 ("nine")
//There must be a function for each of the following mathematical operations: plus, minus, times, dividedBy (divided_by in Ruby and Python)
//Each calculation consist of exactly one operation and two numbers
//The most outer function represents the left operand, the most inner function represents the right operand
//Divison should be integer division. For example, this should return 2, not 2.666666...:

function zero(func) {
  let n = 0;
  if(func) {
    return func(n);
  }
  return n;
}
function one(func) {
    let n = 1;
  if(func) {
    return func(n);
  }
  return n;
}
function two(func) {
    let n = 2;
  if(func) {
    return func(n);
  }
  return n;
}
function three(func) {
    let n = 3;
  if(func) {
    return func(n);
  }
  return n;
}
function four(func) {
    let n = 4;
  if(func) {
    return func(n);
  }
  return n;
}
function five(func) {
    let n = 5;
  if(func) {
    return func(n);
  }
  return n;
}
function six(func) {
    let n = 6;
  if(func) {
    return func(n);
  }
  return n;
}
function seven(func) {
    let n = 7;
  if(func) {
    return func(n);
  }
  return n;
}
function eight(func) {
    let n = 8;
  if(func) {
    return func(n);
  }
  return n;
}
function nine(func) {
    let n = 9;
  if(func) {
    return func(n);
  }
  return n;
}

function plus(num) {
  return (a) => num + a;
}
function minus(num) {
  return (a) => a - num;
}
function times(num) {
  return (a) => num * a;
}
function dividedBy(num) {
  return (a) => Math.floor(a/num)
}