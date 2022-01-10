function fitnessCard(input) {

    let money = Number(input[0]);
    let gender = input[1];
    let age = Number(input[2]);
    let sport = input[3];
    let currentSum = 0;
    let cardPrice = 0;

    switch (sport) {
        case "Gym":
            if (gender === "m") {
                cardPrice = 42;
                currentSum = money - cardPrice;
            } else {
                cardPrice = 35;
                currentSum = money - cardPrice;
            }
            break;
        case "Boxing":
            if (gender === "m") {
                cardPrice = 41;
                currentSum = money - cardPrice;
            } else {
                cardPrice = 37;
                currentSum = money - cardPrice;
            }
            break;
        case "Yoga":
            if (gender === "m") {
                cardPrice = 45;
                currentSum = money - cardPrice;
            } else {
                cardPrice = 42;
                currentSum = money - cardPrice;
            }
            break;
        case "Zumba":
            if (gender === "m") {
                cardPrice = 34;
                currentSum = money - cardPrice;
            } else {
                cardPrice = 31;
                currentSum = money - cardPrice;
            }
            break;
        case "Dances":
            if (gender === "m") {
                cardPrice = 51;
                currentSum = money - cardPrice;
            } else {
                cardPrice = 53;
                currentSum = money - cardPrice;
            }
            break;
        case "Pilates":
            if (gender === "m") {
                cardPrice = 39;
                currentSum = money - cardPrice;
            } else {
                cardPrice = 37;
                currentSum = money - cardPrice;
            }
            break;
    }
    if (age <= 19) {
        cardPrice *= 0.80;
        currentSum = money - cardPrice;
    }
    if (currentSum >= 0) {
        console.log(`You purchased a 1 month pass for ${sport}.`);
    } else {
        console.log(`You don't have enough money! You need $${Math.abs(currentSum).toFixed(2)} more.`);
    }

}
fitnessCard(['10', 'm', '50', 'Pilates']);