/**Moklet Coding Club wants to understand the difference between a global variable and a local variable. 
 *They build a small program with a global variable named TotalCalls that keeps track of how many times a procedure has been called in total,
 *and a local variable that only exists inside that procedure.
 *YOUR TASK
 *Create a Flowgorithm program that:
 *•	creates a global variable named TotalCalls, initialized to 0
 *•	creates a Procedure named LogCall that increases the global TotalCalls by 1 every time it is called, 
 *•   and uses a local variable to display which call number it currently is
 *•	calls the procedure 3 times from the main program
 *•	displays the final value of TotalCalls after all the calls are finished
 */

let totalCalls: number = 0;

function LogCall(): void {
    let currentCallMessage: string = "Procedure is calling...";
    totalCalls++;
    console.log(`${currentCallMessage} This is a call number..-${totalCalls}`);
}

LogCall();
LogCall();
LogCall();

console.log(`The final value of TotalCalls after all calls: ${totalCalls}`);

export{};