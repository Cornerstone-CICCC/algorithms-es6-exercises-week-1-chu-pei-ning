/*
Write an anonymous function expression that stores a function in a variable called "laugh" and outputs the number of "ha"s that you pass in as an argument.

laugh(3);
Returns: hahaha!
*/

function laugh (times) {
      let laughing = "";
      for (var j = 1; j <= times; j++) {
            laughing += "ha"
    }
    return laughing + "!";
}

const print = laugh(5)
console.log (print)