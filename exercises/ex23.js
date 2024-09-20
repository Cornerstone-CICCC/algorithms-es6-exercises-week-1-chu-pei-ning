/*
const ingredients = ["eggs", "milk", "flour", "sugar", "baking soda", "baking powder", "chocolate chips", "bananas"];

Write a loop under each comment in the file.
Under the first, write a while loop that prints out each item of ingredients.
Under the second, write a for loop that does the same thing.
And under the third, write any loop, while or for that prints out each item of ingredients but backwards (that is, the first should be "bananas" and the last "eggs").
*/

const ingredients = ["eggs", "milk", "flour", "sugar", "baking soda", "baking powder", "chocolate chips", "bananas"]
//1
let index = 0
while(index < ingredients.length){
      console.log(ingredients[index])
      index++
}
console.log("-----------------------------------------------")
//2
for ( i = 0; i < ingredients.length; i++){
      console.log(ingredients[i])
}
console.log("-----------------------------------------------")
//3
for ( a = 0; a < ingredients.length; a++){
      let ingredientsItems = ingredients.reverse() //.forEach()
      console.log(ingredientsItems[a])
}
console.log("-----------------------------------------------")
//4
let ingredientsItems2 = ingredients.reverse().forEach(x => console.log(x))