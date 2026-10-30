/**BMI Category Function
 *The School Clinic now wants its BMI classification logic packed into a single reusable function, 
 *so the nurse can call it for every student instead of rewriting the same condition every time.
 *YOUR TASK
 *Create a Flowgorithm program with a Function named BMICategory that takes weight and height as parameters, 
 *calculates the BMI inside the function, uses a condition to classify it (Underweight, Normal, Overweight, Obese),     
 *and returns the category as text. Call the function and display the student's BMI and category.
 */

function BMICategory(weight: number, height: number): string {
    const bmi = weight / (height * height);
    let category: string;

    if (bmi < 18.5) {
        category = "Underweight";
    } else if (bmi < 25) {
        category = "Normal";
    } else if (bmi < 30) {
        category = "Overweight";
    } else {
        category = "Obese";
    }

    return category;
}

console.log(BMICategory(70, 1.75)); 
console.log(BMICategory(50, 1.75)); 
console.log(BMICategory(90, 1.75)); 
console.log(BMICategory(100, 1.75)); 

export {};