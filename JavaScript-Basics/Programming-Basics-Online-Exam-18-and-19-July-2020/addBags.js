function addBags(input) {

    let priceOver20kg = Number(input[0]);
    let baggsWeight = Number(input[1]);
    let days = Number(input[2]);
    let numberOfBags = Number(input[3]);

    let price = 0;

    if (baggsWeight < 10) {
        price = priceOver20kg * 0.20;
    } else if (baggsWeight <= 20) {
        price = priceOver20kg * 0.50;
    } else {
        price = priceOver20kg;
    }
    if (days < 7) {
        price *= 1.40;
    } else if (days <= 30) {
        price *= 1.15;
    } else {
        price *= 1.10;
    }
    console.log(`The total price of bags is: ${(price * numberOfBags).toFixed(2)} lv.`);
}
addBags(['30', '18', '15', '2']);