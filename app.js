#!/usr/bin/env node
import inquirer from "inquirer";
// 1) Computer generates a random number between 1 and 10
const randomNumber = Math.floor(Math.random() * 10 + 1);
// The Math.random() function generates a random floating-point number between 0 (inclusive) and 1 (exclusive).
// Multiplying it by 10 gives a range from 0 to 9.99999...
// Math.floor() rounds down to the nearest whole number, ensuring we get an integer from 0 to 9.
// Adding 1 ensures we get numbers from 1 to 10, not 0 to 9.
// 2) User inputs their guess
const answers = await inquirer.prompt([
    {
        name: "userGuessedNumber",
        type: "number",
        message: "Please guess a number between 1 and 10:",
    },
]);
// The line above waits for the user's input. It prompts the user with a message asking them to guess a number between 1 and 10,
// and expects the user to input a number. The user's input will be stored in the `answers` variable.
// 3) Compare user input with computer generated number and display the result
if (answers.userGuessedNumber === randomNumber) {
    console.log("Congratulations! You guessed the right number.");
}
else {
    console.log("Sorry, you guessed the wrong number. The correct number was " +
        randomNumber +
        ".");
}
