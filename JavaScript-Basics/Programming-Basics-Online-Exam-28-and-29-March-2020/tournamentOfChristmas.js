function tournamentOfChristmas(input) {

    let days = Number(input[0]);
    let index = 1;
    let command = input[index];

    let donation = 0;
    let winsCount = 0;
    let loseCount = 0;
    let winningDay = 0;
    let losingDay = 0;
    let donationPerGame = 0;

    for (let i = 1; i <= days; i++) {
        while (command !== "Finish") {
            let game = input[index];
            index++;
            let result = input[index];
            index++;

            if (result == "win") {
                donationPerGame += 20;
                winsCount++;
            } else if (result == "lose") {
                loseCount++;
            }
            command = input[index];
        }
        if (winsCount > loseCount) {
            donation += donationPerGame * 1.10;
            winningDay++;
        } else {
            donation += donationPerGame;
            losingDay++;
        }
        winsCount = 0;
        loseCount = 0;
        donationPerGame = 0;
        index++;
        command = input[index];
    }
    if (winningDay > losingDay) {
        donation *= 1.2;
        console.log(`You won the tournament! Total raised money: ${donation.toFixed(2)}`);
    } else {
        console.log(`You lost the tournament! Total raised money: ${donation.toFixed(2)}`);
    }
}
tournamentOfChristmas(["3",
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
    "Finish"]);