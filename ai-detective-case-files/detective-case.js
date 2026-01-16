// Case 1

function mystery1(arr) {
  let i = 0;
  while (i < arr.length) {
    if (arr[i] % 2 === 0) {
      return true;
    }
    i++
  }
  return false;
}

// Case 2

function isPalindrome(text) {
    return text.split('').reverse().join('') === text
}

// Case 3

function complicatedCalc(a, b) {
  return a + b
}