/*
Create an object called facebookProfile. The object should have 3 properties:

your name
the number of friends you have, and
an array of messages you've posted (as strings)
The object should also have 4 methods:

postMessage(message) - adds a new message string to the array
deleteMessage(index) - removes the message corresponding to the index provided
addFriend() - increases the friend count by 1
removeFriend() - decreases the friend count by 1
*/

const facebookProfile = {
      myName: "Julia",
      myFriends: 30,
      myMessages: ["morning go swimming", "everning go reading", "night go singing"],
      postMessage: function(message) {
            this.myMessages.push(message)
      },
      deleteMessage: function(index) {
            this.myMessages.splice(index, 1)
      },
      addFriend: function() {
            return this.myFriends + 1
      },
      removeFriend: function() {
            return this.myFriends - 1
      }
}

console.log(facebookProfile.addFriend())