function energyBooster(input) {

    let fruit = input[0];
    let size = input[1];
    let numberOfSets = Number(input[2]);
    let priceForSet = 0;
    let sum = 0;
    let discount = 0;

    if (fruit === "Watermelon") {
        if (size === "small") {
            priceForSet = numberOfSets * (2 * 56);
        } else if (size === "big") {
            priceForSet = numberOfSets * (5 * 28.70);
        }
    } else if (fruit === "Mango") {
        if (size === "small") {
            priceForSet = numberOfSets * (2 * 36.66);
        } else if (size === "big") {
            priceForSet = numberOfSets * (5 * 19.60);
        }
    } else if (fruit === "Pineapple") {
        if (size === "small") {
            priceForSet = numberOfSets * (2 * 42.10);
        } else if (size === "big") {
            priceForSet = numberOfSets * (5 * 24.80);
        }
    } else if (fruit === "Raspberry") {
        if (size === "small") {
            priceForSet = numberOfSets * (2 * 20);
        } else if (size === "big") {
            priceForSet = numberOfSets * (5 * 15.20);
        }
    }

    if (priceForSet >= 400 && priceForSet <= 1000) {
        discount = priceForSet * 0.15;
    } else if (priceForSet > 1000) {
        discount = priceForSet * 0.5;
    }
    sum = priceForSet - discount;

    console.log(`${sum.toFixed(2)} lv.`);
}
energyBooster(['Mango', 'big', '8']);