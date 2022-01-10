function trainTheTrainers(input) {
    let juriNumber = Number(input[0]);
    let index = 1;
    let command = input[index];
    let counter = 0;

    let allPresentationsGrade = 0;

    while (command !== "Finish") {

        let presentationName = input[index];
        index++;
        let grade = Number(input[index]);
        index++;
        let gradeSum = 0;
        let currentAvgGrade = 0;

        for (let i = 1; i <= juriNumber; i++) {
            gradeSum += grade;
            grade = Number(input[index++]);
            counter++;
        }
        currentAvgGrade = gradeSum / juriNumber;
        allPresentationsGrade += gradeSum;
        console.log(`${presentationName} - ${currentAvgGrade.toFixed(2)}.`);
        index--;
        command = input[index];
    }
    console.log(`Student's final assessment is ${(allPresentationsGrade / counter).toFixed(2)}.`);
}
trainTheTrainers(["2",
    "Objects and Classes",
    "5.77",
    "4.23",
    "Dictionaries",
    "4.62",
    "5.02",
    "RegEx",
    "2.88",
    "3.42",
    "Finish"])