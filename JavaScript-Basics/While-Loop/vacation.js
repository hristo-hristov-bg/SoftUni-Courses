function vacation(input) {

    let moneyNeeded = Number(input[0]);
    let savedMoney = Number(input[1]);
    let index = 2;

    let spendDays = 0;
    let days = 0;

    while (savedMoney <= moneyNeeded) {
        let operation = input[index++];
        let amount = Number(input[index]);

        if (operation === "spend") {
            spendDays++;
            days++;
            if (amount > savedMoney) {
                savedMoney = 0;
            } else {
                savedMoney -= amount;
            }
        } else if (operation === "save") {
            spendDays = 0;
            days++;
            savedMoney += amount;
        }
        if (spendDays === 5) {
            console.log("You can't save the money.");
            console.log(days);
            break;
        }
        if (savedMoney >= moneyNeeded) {
            console.log(`You saved the money for ${days} days.`);
            break;
        }
        index++;
    }
}
vacation(["250",
"150",
"spend",
"50",
"spend",
"50",
"save",
"100",
"save",
"100"])


