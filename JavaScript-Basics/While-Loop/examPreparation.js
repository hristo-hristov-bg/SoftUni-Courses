function examPreparation(input) {

    let lowScoreNumber = Number(input[0]);
    let index = 1;
    let taskName = input[index];
    index++;
    let score = Number(input[index]);
    index++;
    let averageScore = 0;
    let numberOfProblems = 0;
    let sumOfScores = 0;
    let lowScoreSum = 0;
    let lastProblem = input[input.length - 3];

    while (true) {
        if (score > 4) {
            numberOfProblems++;
            sumOfScores += score;
            averageScore = sumOfScores / numberOfProblems;
        } else if (score <= 4) {
            numberOfProblems++;
            lowScoreSum++;
            sumOfScores+= score;
            averageScore = sumOfScores / numberOfProblems;
        }
        if (taskName === "Enough") {
            console.log(`Average score: ${(averageScore).toFixed(2)}`);
            console.log(`Number of problems: ${numberOfProblems}`);
            console.log(`Last problem: ${lastProblem}`);
            break;
        } else if (lowScoreNumber === lowScoreSum) {
            console.log(`You need a break, ${lowScoreNumber} poor grades.`);
            break;
        }
        taskName = input[index];
        index++;
        score = Number(input[index]);
        index++
    }

}
examPreparation(["4",
    "Stone Age",
    "5",
    "Freedom",
    "5",
    "Storage",
    "3",
    "Enough"]);