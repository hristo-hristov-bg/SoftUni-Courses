function suitcasesLoad(input) {

    let capacity = Number(input[0]);
    let index = 1;
    let command = input[index];
    index++;
    let sumOfSuitcases = 0;
    let count = 0;

    while (true) {
        let currentSuitcase = Number(command);
        if (capacity >= sumOfSuitcases) {
            if ((index - 1) % 3 == 0) {
                currentSuitcase *= 1.10;
            }
            sumOfSuitcases += currentSuitcase;
        } else {
            count--;
            console.log("No more space!");
            console.log(`Statistic: ${count} suitcases loaded.`);
            break;
        }
        if (command === "End") {
            console.log("Congratulations! All suitcases are loaded!");
            console.log(`Statistic: ${count} suitcases loaded.`);
            break;
        }
        count++;
        command = input[index];
        index++;
    }
}
suitcasesLoad(["1200.2",
    "260",
    "380.5",
    "125.6",
    "305",
    "End"]);