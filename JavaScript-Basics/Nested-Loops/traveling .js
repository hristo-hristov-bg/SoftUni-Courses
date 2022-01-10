function travelling(input){

    let index = 0;
    let currentSum = input[index++];

    while (currentSum !== "End") {
        let Budget = Number(input[index++]);
        let savedSum = 0;

        for (let i = index; i < Budget; i++) {
            let currentSavedSum = Number(input[index++]);
            savedSum += currentSavedSum;

            if (savedSum >= Budget) {
                console.log(`Going to ${currentSum}!`);
                break;
            } else {
            }
        }
        currentSum = input[index++];
    }
}
travelling(["Greece",
"1000",
"200",
"200",
"300",
"100",
"150",
"240",
"Spain",
"1200",
"300",
"500",
"193",
"423",
"End"]);