function fuelMoney(distance, numOfPassengers, pricePerLiter) {

    let neededFuel = ((distance / 100) * 7) + (numOfPassengers * 0.1);
    let neededMoney = neededFuel * pricePerLiter;

    console.log(`Needed money for that trip is ${neededMoney}lv.`);
}
fuelMoney(90, 14, 2.88);