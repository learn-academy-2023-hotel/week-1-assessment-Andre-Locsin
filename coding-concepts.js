// ASSESSMENT 1: Coding Conceptual Questions

// Examine the following examples.

// First, predict the outcome based on your understanding of the code.
// Then, uncomment the console.log() and verify the output. Briefly explain why your initial answer was correct or incorrect.
// There is no need to change any of the code.

// --------------------INSTRUCTOR EXAMPLE: What will this log?
// const colors = ["tangerine", "magenta", "lilac", "daffodil"]
// console.log(colors.push("indigo"))

// a) Your answer: 5
// b) Verify and explain:it would input the number of index in the array and not the actual array due to the lack of []

// --------------------1) What will this log?

const cohort = "LEARN 2023"
// console.log(cohort.length)

// a) Your answer:10
// b) Verify and explain:it will execute the .length and count the amount that is in the array without extracting the specific value because [] were not used 

// --------------------2) What will this log?

const greeting = "Hello World!"
// console.log(greeting[4])

// a) Your answer: o
// b) Verify and explain: due to [4] it gives as the 4th index from the array and its value in our case is a string and the 4th index is "o" because when counting an array its start with the number "0" "1" so on and so forth

// --------------------3) What will this log?

const languages = ["JavaScript", "Ruby", "Python", "C++"]
const index = 1
//console.log(languages[index])

// a) Your answer: 1
// b) Verify and explain: because of the const 1 it will give us its value from console.log index = 1

// --------------------4) What will this log?

const weekendDays = ["saturday", "sunday"]
// console.log(weekendDays.toUpperCase())

// a) Your answer: error or undefined
// b) Verify and explain: you cannot .toUppercase an array without converting it to an individual string then uppercasing it afterwards

// --------------------5) What will this log?

const dataTypes = ["number", "string", "Boolean", "undefined"]
// console.log(typeof dataTypes.length)

// a) Your answer: 28
// b) Verify and explain: .length will count the number of character in the string
