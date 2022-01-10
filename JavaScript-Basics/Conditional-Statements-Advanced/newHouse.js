function newHouse(input) {

    let flowerName = input[0];
    let countFlowers = Number(input[1]);
    let budget = Number(input[2]);

    let totalPrice = 0;

    if (flowerName == "Roses") {
        totalPrice = countFlowers * 5.00;
    } else if (flowerName == "Dahlias") {
        totalPrice = countFlowers * 3.80;
    } else if (flowerName == "Tulips") {
        totalPrice = countFlowers * 2.80;
    } else if (flowerName == "Narcissus") {
        totalPrice = countFlowers * 3.00;
    } else if (flowerName == "Gladiolus") {
        totalPrice = countFlowers * 2.50;
    }

    if (flowerName == "Roses" && countFlowers > 80) {
        totalPrice = totalPrice * 0.90;
    } else if (flowerName == "Dahlias" && countFlowers > 90) {
        totalPrice = totalPrice * 0.85;
    } else if (flowerName == "Tulips" && countFlowers > 80) {
        totalPrice = totalPrice * 0.85;
    } else if (flowerName == "Narcissus" && countFlowers < 120) {
        totalPrice = totalPrice * 1.15;
    } else if (flowerName == "Gladiolus" && countFlowers < 80) {
        totalPrice = totalPrice * 1.20;
    }

    if (budget >= totalPrice) {
        console.log(`Hey, you have a great garden with ${countFlowers} ${flowerName} and ${(budget - totalPrice).toFixed(2)} leva left.`)
    } else if (budget < totalPrice) {
        console.log(`Not enough money, you need ${(totalPrice - budget).toFixed(2)} leva more.`)
    }

}
newHouse(["Narcissus", "119", "360"]);