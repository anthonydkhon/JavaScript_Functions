console.log("JavaScript Functions")

// Exercise 1 Print Odds Cont.

let count = window.prompt("Enter a Number")

function printOdds(count) {
    for (
        let i = 1;
        i < count;
        i++
        )
    if (i % 2 == 1) {
        console.log(i);
    } else {
        console.log(i + " Is not an odd number!");
    }
}

printOdds(Number (count));

// Exercise 2 Legal?

// Write function checkAge with userName and age in parameter

let userName = window.prompt("whats your name?");
let age = window.prompt("How old are you?");

function checkAge (userName, age) {
    // Declare and initialize an aboveSixteen local var with string
    if ( age >= 16 ) {
        console.log(`Congrats ${userName}, you can drive!`);
    } else {
        console.log(`Sorry ${userName}, but you need to wait until you're 16.`);
    }
}

checkAge (userName, (Number (age)));
