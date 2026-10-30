/**Moklet Coding Club wants a reusable piece of code that prints a personalized welcome message for every new member, 
 *instead of retyping the same print statements again and again for each person.
 *YOUR TASK
 *Create a Flowgorithm program with a Procedure named PrintWelcome that takes a name as a parameter 
 *and displays a welcome message. Call the procedure from the main program, passing a name as the argument
 */

function PrintWelcome(name: string): void {
    console.log(`Welcome to Moklet Coding Club, ${name}!`);
}

PrintWelcome("Alice");
PrintWelcome("Bob");
PrintWelcome("Charlie");

export {};