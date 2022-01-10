function walking(input) {

    let steps = 0;
    let goingHome = input[input.length - 2];
    let stepsGoal = 10000;

    if (goingHome === "Going home") {
        let i = 0;
        while (i < input.length - 2) {
            let currentSteps = Number(input[i]);
            steps += currentSteps;
            i++;
        }
        steps += Number(input[input.length - 1]);
    } else {
        let i = 0;
        while (i < input.length) {
            let currentSteps = Number(input[i]);
            steps += currentSteps;
            i++;
        }
    }
    if (steps >= stepsGoal) {
        console.log("Goal reached! Good job!");
        console.log(`${Math.abs(stepsGoal - steps)} steps over the goal!`);
    } else {
        console.log(`${Math.abs(stepsGoal - steps)} more steps to reach goal.`);
    }
}
walking(["1500",
    "3000",
    "250",
    "1548",
    "2000",
    "Going home",
    "2000"]);