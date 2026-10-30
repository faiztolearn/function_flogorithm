/**Student Grade Report System
*SMK Telkom Malang wants a complete grade report generator that combines everything learned so far. 
*For each student, the system must calculate their average from three exam scores, determine their letter grade, 
*and print a formatted report line - all built using separate reusable functions and procedures.
*YOUR TASK
*Create a Flowgorithm program that:
*•	creates a Function named CalculateAverage(score1, score2, score3) that returns the average of three scores
*•	creates a Function named DetermineGrade(average) that uses a condition to return the letter grade
*•  (A >= 90, B 80-89, C 70-79, D 60-69, F below 60)
*•	creates a Procedure named PrintReport(name, average, grade) that displays a formatted report line for one student
*•	uses a For loop in the main program to process 2 students, calling all three functions/procedures for each student
*/

function CalculateAverage(score1: number, score2: number, score3: number): number {
    return (score1 + score2 + score3) / 3;
}

function DetermineGrade(average: number): string {
    if (average >= 90) {
        return 'A';
    } else if (average >= 80) {
        return 'B';
    } else if (average >= 70) {
        return 'C';
    } else if (average >= 60) {
        return 'D';
    } else {
        return 'F';
    }
}

function PrintReport(name: string, average: number, grade: string): void {
    console.log(`Nama: ${name} | Rata-rata: ${average.toFixed(2)} | Grade: ${grade}`);
}

const students = [
    { name: "Andi", scores: [88, 92, 90] },
    { name: "Siti", scores: [75, 68, 72] }
];

for (let i = 0; i < students.length; i++) {
    const student = students[i];
    
    const avg = CalculateAverage(student.scores[0], student.scores[1], student.scores[2]);
    const grade = DetermineGrade(avg);
    
    PrintReport(student.name, avg, grade);
}