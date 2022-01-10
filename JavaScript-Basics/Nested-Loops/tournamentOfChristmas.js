function tournamentOfChristmas(input) {

    let days = Number(input[0]);
    let index = 1;
    let command = input[index];
    index++;

    let donate = 0;

    let winnerDays = 0;
    let loserDays = 0;
    for (let i = 1; i <= days; i++) {
        let sumOfWins = 0;
        let sumOfLoses = 0;
        let dayDonate = 0;

        while (command !== "Finish") {
            if (command === "win") {
                dayDonate += 20;
                sumOfWins++;
            } else if (command === "lose") {
                sumOfLoses++;
            }
            command = input[index];
            index++;
        }
        if (sumOfWins > sumOfLoses) {
            dayDonate *= 1.10;
            donate += dayDonate;
            winnerDays++;
        } else if (sumOfWins < sumOfLoses) {
            loserDays++;
            donate += dayDonate;
        }
        command = input[index];
    }
    if (winnerDays > loserDays) {
        donate *= 1.2;
        console.log(`You won the tournament! Total raised money: ${donate.toFixed(2)}`);
    } else {
        console.log(`You lost the tournament! Total raised money: ${donate.toFixed(2)}`);
    }
}
tournamentOfChristmas([
    "3",
    "darts",
    "lose",
    "handball",
    "lose",
    "judo",
    "win",
    "Finish",
    "snooker",
    "lose",
    "swimming",
    "lose",
    "squash",
    "lose",
    "table tennis",
    "win",
    "Finish",
    "volleyball",
    "win",
    "basketball",
    "win",
    "Finish"
]);
