/**Sum of Two Numbers
 *Moklet Coding Club wants to understand the difference between a parameter (the placeholder inside a function's definition) 
 *and an argument (the actual value passed in when the function is called), by building a function that adds two numbers together.
 *YOUR TASK
 *Create a Flowgorithm program with a Function named AddNumbers that takes two parameters and returns their sum. Call the function using two arguments and display the result.
 */

function AddNumbers(num1: number, num2: number): number {
    return num1 + num2;
}
console.log(AddNumbers(5, 10));
console.log(AddNumbers(3, 7));
console.log(AddNumbers(1, 2));

export {};