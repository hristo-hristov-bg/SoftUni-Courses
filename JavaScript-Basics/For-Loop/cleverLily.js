function cleverLily(input) {

    let age = Number(input[0]);
    let washingMachinePrice = Number(input[1]);
    let toyPrice = Number(input[2]);

    let sumOfToys = 0;
    let sumOfMoney = 0;
    let currentMoney = 10;
    for (let i = 1; i <= age; i++) {
        if (i % 2 === 0) {
            sumOfMoney += currentMoney;
            sumOfMoney -= 1;
            currentMoney += 10;
        } else {
            sumOfToys++;
        }
    }
    sumOfMoney += sumOfToys * toyPrice;

    if (sumOfMoney >= washingMachinePrice) {
        console.log(`Yes! ${(sumOfMoney - washingMachinePrice).toFixed(2)}`);
    } else if (washingMachinePrice > sumOfMoney) {
        console.log(`No! ${(washingMachinePrice - sumOfMoney).toFixed(2)}`);
    }
}
cleverLily(["21", "1570.98", "3"]);