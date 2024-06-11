/**
 * To run this file in Gitpod, use the 
 * command node arrow-functions.js in the terminal
 */

// Vanilla JavaScript Function

// Arrow Function With Parameters
const addTwoNumbers = (a, b) => {
    return a * b;
}
// Single Line Arrow Function With Parameters
const addTwoNumbers2 = (a, b) => a + b;
// Implicit Returns
const saySomething = message => console.log(message);
// Returning Multiple Lines
const returnMultipleLines = () => (
    `<p>
    This is a multiline string!
    <p>`
)
console.log(returnMultipleLines());