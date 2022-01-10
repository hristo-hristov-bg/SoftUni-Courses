function pastryShop(input) {

    let pastryType = input[0];
    let pastryNumber = Number(input[1]);
    let day = Number(input[2]);
    let pastryPrice = 0;


    switch (pastryType) {
        case "Cake":
            if (day <= 15) {
                pastryPrice = pastryNumber * 24;
            } else if (day > 15) {
                pastryPrice = pastryNumber * 28.70;
            }
            break;
        case "Souffle":
            if (day <= 15) {
                pastryPrice = pastryNumber * 6.66;
            } else if (day > 15) {
                pastryPrice = pastryNumber * 9.80;
            }
            break;
        case "Baklava":
            if (day <= 15) {
                pastryPrice = pastryNumber * 12.60;
            } else if (day > 15) {
                pastryPrice = pastryNumber * 16.98;
            }
            break;
    }
    if (day <= 22) {
        if (pastryPrice >= 100 && pastryPrice <= 200) {
            pastryPrice *= 0.85;
        } else if (pastryPrice > 200) {
            pastryPrice *= 0.75;
        }
    }
    if (day <= 15) {
        pastryPrice *= 0.90;
    }
    console.log(pastryPrice.toFixed(2));

}
pastryShop(["Cake",
    "5",
    "12"]);