function flowers(input) {

    let chrysanthemums = Number(input[0]);
    let roses = Number(input[1]);
    let tulips = Number(input[2]);
    let season = input[3];
    let holiday = input[4];

    let chrysanthemumsPrice = 0;
    let rosesPrice = 0;
    let tulipsPrice = 0;
    let totalPrice = 0;
    let flowersCount = 0;

    switch (season) {
        case "Spring":
        case "Summer":
            chrysanthemumsPrice = chrysanthemums * 2;
            rosesPrice = roses * 4.10;
            tulipsPrice = tulips * 2.50;
            totalPrice = chrysanthemumsPrice + rosesPrice + tulipsPrice;
            flowersCount = chrysanthemums + roses + tulips;
            if (holiday === "Y") {
                totalPrice *= 1.15;
            }
            if (tulips > 7) {
                totalPrice *= 0.95;
            }
            if (flowersCount > 20) {
                totalPrice *= 0.80;
            }
            totalPrice += 2;
            break;
        case "Autumn":
        case "Winter":
            chrysanthemumsPrice = chrysanthemums * 3.75;
            rosesPrice = roses * 4.50;
            tulipsPrice = tulips * 4.15;
            totalPrice = chrysanthemumsPrice + rosesPrice + tulipsPrice;
            flowersCount = chrysanthemums + roses + tulips;
            if (holiday === "Y") {
                totalPrice *= 1.15;
            }
            if (roses >= 10) {
                totalPrice *= 0.90;
            }
            if (flowersCount > 20) {
                totalPrice *= 0.80;
            }
            totalPrice += 2;
            break;
    }
    console.log(totalPrice.toFixed(2));
}
flowers(['3','10','9','Winter','N']);