"use strict";
/**Online Store Invoice
 *Moklet Online Store wants its invoice logic split into two reusable functions:
 *one function calculates the subtotal (price x quantity),
 *and another function calculates the shipping cost based on that subtotal - shipping is free when the subtotal is at least Rp200,000,
 *otherwise a flat Rp15,000 fee applies.
 *YOUR TASK
 *Create a Flowgorithm program that:
 *•	creates a Function named CalculateSubtotal that takes price and quantity as parameters and returns the subtotal
 *•	creates a Function named CalculateShipping that takes the subtotal as a parameter and returns the shipping cost
 *•	in the main program, calls both functions and combines their results into the grand total
 *•	displays the subtotal, the shipping cost, and the grand total
 */
function CalculateSubtotal(price, quantity) {
    return price * quantity;
}
function CalculateShipping(subtotal) {
    if (subtotal >= 200000) {
        return 0;
    }
    else {
        return 15000;
    }
}
const price = 8000;
const quantity = 9;
const subtotal = CalculateSubtotal(price, quantity);
const shippingCost = CalculateShipping(subtotal);
const grandTotal = subtotal + shippingCost;
console.log(`Subtotal: Rp${subtotal}`);
console.log(`Shipping Cost: Rp${shippingCost}`);
console.log(`Grand Total: Rp${grandTotal}`);
