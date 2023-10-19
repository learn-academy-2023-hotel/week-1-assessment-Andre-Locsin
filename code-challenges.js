// ASSESSMENT 1: Coding Practical Questions

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, leave comments to help us understand your thought process

// Reminder: Ensure you are in the correct directory
// Run the file with the following command: $ node code - challenges.js

// --------------------INSTRUCTOR EXAMPLE: Create a conditional statement that evaluates two strings and determines which of the strings has more characters. Use the two sets of test variables provided.

// Set one:
// const fruit1 = "apple"
// const fruit2 = "banana"
// // // Expected outcome: "banana"
// if(fruit1.length > fruit2.length){
//     console.log(fruit1)
// }else if(fruit2.length > fruit1.length){
//     console.log(fruit2)
// }
// conditional statement to compare which string is longer based on index
// first console.log outputs fruit1 if it is longer
// second console.log outputs fruit2 if it is longer
// compares the index of the 2 strings

// Set two:
// const fruit1 = "cherry"
// const fruit2 = "kiwi"

// const fruit1 = "cherry"
// const fruit2 = "kiwi"
// // Expected outcome: "cherry"
// if(fruit1.length > fruit2.length){
//     console.log(fruit1)
// }else if(fruit2.length > fruit1.length){
//     console.log(fruit2)
// }

// Pseudo code:
// determine what data type we are working with
// set a condition which compares data types which are 2 strings
// (.length) is used to count the number of index there is in our string
// we are using "if" statements as our conditional statements to get a bolean equivalent from the 2 items being compared
// (console.log) is the method we are using to output our statement which is attatched to a data type that is a variable so we can replace true or false with said data type to get the content that is assigned to the variable given to us
// else if is for the other variable that we have if the 2nd variables index is larger



// --------------------1) Create the code that will combine the two arrays and return the length using the test variables provided below.

const padres1984WorldSeriesRuns = [2, 5, 2, 2, 4]
const padres1998WorldSeriesRuns = [6, 3, 5, 3]
 const padresWorldSeriesRuns =(padres1984WorldSeriesRuns.length) + (padres1998WorldSeriesRuns.legnth)
 console.log(padresWorldSeriesRuns)

// Expected output: 9

// Pseudo code: will count the amount of index present in the combined array without extracting the actual value.

// --------------------2) Create the code that will reverse the letters of a string using the test variable provided below.

// const currentCohort = "Golf 2023"
// // Expected output: "3202 floG"
// const myArray = (currentCohort.split('').reverse().join(""))
// console.log(myArray)
// Pseudo code:
// (myArray)- set our data type
//(.split) is to split the string into individual strings in order to reverse our array because you cannot reverse a string
// (.reverse) to reverse our array 
//(.join) to join all our index in the array to turn into a string


// --------------------3) Create the code that will log only the odd numbers from the array using the test variable provided below.

// const stockExchange = [13, 34, -4, 42, 5, -5, 10, 27, 42, 10]
// // Expected output: 13 5 -5 27
// for(let i = 0; i < stockExchange.length; i++){
//     if(stockExchange[i] % 2 !== 0)
//     console.log(stockExchange[i])
// }

// Pseudo code:
// stockExchange is our given array

// (let i=0) =>starts us off at the 0 index
// (i < stockExchange.length) => compares each index of the array due to ().length)
// (i++) => allowing us to go up by 1 after each comparison unstil the end of .length
// we create a condition using (if) where we can compare data type from the array
// (stockExchange[i] % 2 !== 0) 
// [i] => is to compare each value of the array
// % is to attain the remainder after it is compared to a number which is 2 in our case to equate all even numbers into 0
// !== 0 => so that every number that is not equal to 0 will be recycled back into the array
// (console.log(stockExchange[i])) => is to log the value of the index due to the [] command and i is allowing it to select from the array