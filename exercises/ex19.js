/*
Call the emotions() function so that it prints the output you see below, but instead of passing the laugh() function as an argument, pass an inline function expression instead.

emotions("happy", laugh(2)); // you can use your laugh function from the previous quizzes
Prints: "I am happy, haha!"
*/

let laugh = function laugh (times) {
      let laughing = "";
      for (var j = 1; j <= times; j++) {
            laughing += "ha"
    }
    return laughing + "!";
}

function emotions(emo, laugh) {
      console.log(`I am ${emo}, ${laugh}`)
}

emotions("happy",laugh(2))