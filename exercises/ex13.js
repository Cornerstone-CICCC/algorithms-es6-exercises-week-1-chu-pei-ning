/*
Write a for loop that prints out the factorial of the number 12:

A factorial is calculated by multiplying a number by all the numbers below it. For instance, 3! or "3 factorial" is 3 * 2 * 1 = 6

3! = 3 * 2 * 1 = 6
4! = 4 * 3 * 2 * 1 = 24
5! = 5 * 4 * 3 * 2 * 1 = 120

Save your final answer in a variable called solution and print it to the console.
*/

for (let n = 2; n <= 12; n++) {
      let result = 1; 
      let expression = ''; 
  
      for (let i = n; i > 0; i--) {
          result *= i; 
          expression += i; 
          if (i > 1) {
              expression += ' * '; 
          }
      }
  
      console.log(`${n}! = ${expression} = ${result}`);
  }
  