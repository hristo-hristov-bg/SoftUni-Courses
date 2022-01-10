function reportSystem(input) {

    let expectedSum = Number(input[0]);
    let index = 1;
    let command = input[index];
    index++;
    let cash = 0;
    let cashCount = 0;
    let card = 0;
    let cardCount = 0;
    let sum = 0;

    while (command !== "End") {
        let currentTransaction = Number(command);
        if ((index) % 2 == 0) {
            if (currentTransaction > 100) {
                console.log("Error in transaction!");
            } else {
                cash += currentTransaction;
                cashCount++;
                sum += currentTransaction;
                console.log("Product sold!");
            }
        } else {
            if (currentTransaction < 10) {
                console.log("Error in transaction!");
            } else {
                card += currentTransaction;
                cardCount++;
                sum += currentTransaction;
                console.log("Product sold!");
            }
        }
        if (sum >= expectedSum) {
            console.log(`Average CS: ${(cash / cashCount).toFixed(2)}`);
            console.log(`Average CC: ${(card / cardCount).toFixed(2)}`);
            break;
        }
        command = input[index];
        index++;
    }
    if (command === "End") {
        console.log("Failed to collect required money for charity.");
    }
}
reportSystem(['600', '86', '150', '98', '227', 'End']);