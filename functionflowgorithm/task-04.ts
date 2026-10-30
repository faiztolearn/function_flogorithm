/**Coffee Price Calculator with Default Discount
 *Moklet Coffee wants a pricing function. If the cashier enters a specific discount percentage, that discount is used. 
 *But if the cashier leaves the discount blank by entering 0, the function should automatically fall back to 
 *a default discount of 5% for walk-in customers.
 *YOUR TASK
 *Create a Flowgorithm program that:
 *•	creates a Function named FinalPrice that takes a price and a discount percentage as parameters
 *•	inside the function, checks whether the discount parameter is 0; if it is, treats it as the default value of 5
 *•	returns the final price after the discount is applied
 *•	calls the function twice from the main program: once with a discount of 0 (to use the default), 
 *and once with a specific discount value
*/

function FinalPrice(price: number, discount: number): number {
    if (discount === 0) {
        discount = 5; 
    }
    const finalPrice = price - (price * discount / 100);
    return finalPrice;
}

console.log(FinalPrice(100, 0)); 
console.log(FinalPrice(100, 10)); 

export {};