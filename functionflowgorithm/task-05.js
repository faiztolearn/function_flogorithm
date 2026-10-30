/**Factorial Calculator
 *Math Club needs a reusable function that calculates the factorial of a number (n!) using repetition,
 *so it can be reused again in future probability lessons.
 *YOUR TASK
 *Create a Flowgorithm program with a Function named Factorial that takes a number as a parameter,
 *uses a loop inside the function to multiply the numbers from 1 to that number, and returns the result.
 *Call the function and display the factorial.
*/
function Factorial(num) {
    let result = 1;
    for (let i = 1; i <= num; i++) {
        result *= i;
    }
    return result;
}
console.log(Factorial(5));
console.log(Factorial(3));
console.log(Factorial(0));