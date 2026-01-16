# Case 1

## :brain: Asked ChatGPT the following question:
> What is wrong with the below JS loop. Dont fix it for me. Consider me as a beginner who is exploring JS and trying to understand it and give me hints to reach the solution code by myself.

```JS
function mystery1(arr) {
  let i = 0;
  while (i < arr.length) {
    if (arr[i] % 2 === 0) {
      return true;
    }
  }
  return false;
}
```

## :robot: CHatGPT gave the following answer

```md
Hint 1: Think about how while loops normally work
Hint 2: Track the value of i step by step
Hint 3: What happens if the if condition is NOT met?
Hint 4: Compare this to how arrays are usually scanned
Hint 5: Why is the return false never reached?
Final thought (no code, just logic>

Your loop has:
	•	A starting point ✅
	•	A stopping condition ✅
	•	A success exit (return true) ✅

But one key ingredient of loops is missing.
Figure out what must change on every iteration so the loop can make progress.
```

## :bulb: My Insight

Found out that the missing ingredient in this while loop is incrementing of i.

## :white_check_mark: Fix

Added i++ to the while loop.

# Case 2

## :brain: Asked ChatGPT the following question:
> Explain this function step-by-step and suggest better variable names.

```js
function q(q) {
    return q.split('').reverse().join('') == q
}
```

Please keep in mind the above mentioned learning scenario

## :robot: CHatGPT gave the following answer

```md
It checks whether the input string reads the same forwards and backwards (a palindrome).
Step-by-step: what happens when you call it
1) q.split('') - takes a string and turns it into an array of characters.
2) .reverse() - reverses the array in place.
3) .join('') - takes the array and glues it back into a string.
4) == q -  Now it compares the reversed string to the original string.
More beginner-friendly names:
	•	Function name: isPalindrome
	•	Parameter name: text or word or str

function isPalindrome(text) { ... }

Prefer === over == in JavaScript once you’re comfortable. (== does type conversion in some cases, which can surprise you.)
```

## :bulb: My Insight

Found out that the th function nis to check for palindrome. ChatGPT was clear about this and once it suggested the naming of the function and parameter correct, the function looked understandable.

## :white_check_mark: Fix

Changed the function and parameter name as suggested by ChatGPT.

# Case 3

## :brain: Asked ChatGPT the following question:
> Consider the above learning scenario and explain me the below over engineered code. There are too much varaibles and it is confusimng. Also make it shorter may be single liner and explain it to me. Dont give me the direct code, give me hints so that I can reach the single liner code

```js
function complicatedCalc(a, b) {
  let x = a;
  let y = b;
  for (let i = 0; i < b; i++) {
    x = x + 1;
    y = y - 1;
  }
  return x;
}
```

## :robot: CHatGPT gave the following answer

```md
Perfect example to learn from — this is over-engineered, and your instinct is right 
1. Inputs - a and b are numbers passed into the function.
2. Extra variables - •	Is y ever used after the loop?
	                 •  Is changing y affecting the return value?
3. The loop - x value is increased by 1, b times, what does this mean to the value x?

Hint 1: Describe the function in one sentence
    Finish this sentence: - “This function returns ______.”
Hint 2: Ask which variables actually matter
Hint 3: Replace repetition with math
Hint 4: Can a function return an expression directly?
```

## :bulb: My Insight

Found out that the function simply adds the 2 given values.

## :white_check_mark: Fix

removed the exisiting code inside the function and simply returned the sum of the given values.