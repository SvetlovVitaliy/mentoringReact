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