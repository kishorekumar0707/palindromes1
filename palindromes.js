let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Anonymous Function
let palindromes = arr.filter(function(num) {
  let str = num.toString();
  return str === str.split('').reverse().join('');
});
console.log("Anonymous Function:",palindromes);

// IIFE
let palindromesIIFE = (function(arr) {
  return arr.filter(function(num) {
    let str = num.toString();
    return str === str.split('').reverse().join('');
  });
})(arr);
console.log("IIFE:",palindromesIIFE);


