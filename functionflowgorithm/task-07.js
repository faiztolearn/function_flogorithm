"use strict";
/**Formatted Receipt Printer
 *Moklet Coffee wants a reusable procedure that prints a neatly formatted receipt line for each item ordered
 *(item name, quantity, and price), so the cashier does not repeat the same formatting code for every item on the receipt.
 *YOUR TASK
 *Create a Flowgorithm program with a Procedure named PrintReceiptLine that takes an item name, quantity, and price as parameters,
 *calculates the subtotal inside the procedure, and displays a formatted receipt line. Call the procedure once for each item ordered.
 */
function PrintReceiptLine(itemName, quantity, price) {
    const subtotal = quantity * price;
    console.log(`${itemName} - Quantity: ${quantity}, Price: $${price.toFixed(2)}, Subtotal: $${subtotal.toFixed(2)}`);
}
PrintReceiptLine("Coffee", 2, 3.5);
PrintReceiptLine("Tea", 1, 2.0);
PrintReceiptLine("Sandwich", 3, 5.0);
