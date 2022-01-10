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

    while (taskName !== "Enough") {
        if (score <= 4) {
            lowScoreSum++;
        }
        if (lowScoreSum >= lowScoreNumber) {
            console.log(`You need a break, ${lowScoreSum} poor grades.`);
            break;
        }
        sumOfScores += score;
        numberOfProblems++;

        taskName = input[index];
        index++;
        score = Number(input[index]);
        index++;
    }
    averageScore = sumOfScores / numberOfProblems;
    if (taskName === "Enough"){
    console.log(`Average score: ${(averageScore).toFixed(2)}`);
    console.log(`Number of problems: ${numberOfProblems}`);
    console.log(`Last problem: ${lastProblem}`);
    }

}
examPreparation(["3",
"Money",
"6",
"Story",
"4",
"Spring Time",
"5",
"Bus",
"6",
"Enough"])


