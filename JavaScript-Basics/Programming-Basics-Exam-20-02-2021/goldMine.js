function goldMine(input) {

    let locationsNumber = Number(input[0]);
    let index = 1;
    let n = Number(input[index]);

    for (let i = 1; i <= locationsNumber; i++) {
        let expectedAvgGold = Number(input[index]);
        index++;
        let days = Number(input[index]);
        index++;
        let goldPerDay = 0;
        let avgGoldPerDay = 0;
        for (let j = 1; j <= days; j++) {
            let locationGold = Number(input[index]);
            index++;
            goldPerDay += locationGold;
            avgGoldPerDay = goldPerDay / days;
        }
        if (avgGoldPerDay >= expectedAvgGold) {
            console.log(`Good job! Average gold per day: ${avgGoldPerDay.toFixed(2)}.`);
        } else if (avgGoldPerDay < expectedAvgGold) {
            console.log(`You need ${(expectedAvgGold - avgGoldPerDay).toFixed(2)} gold.`);
        }
    }
}
goldMine(["1",
"5",
"3",
"10",
"1",
"3"]);