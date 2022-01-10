function aluminumJoinery(input) {

    let numberOfJoinery = Number(input[0]);
    let joinerySize = input[1];
    let receivingType = input[2];

    let price = 0;

    switch (joinerySize) {
        case "90X130":
            price = numberOfJoinery * 110;
            if (numberOfJoinery > 30 && numberOfJoinery <= 60) {
                price *= 0.95;
            } else if (numberOfJoinery > 60) {
                price *= 0.92;
            }
            break;
        case "100X150":
            price = numberOfJoinery * 140;
            if (numberOfJoinery > 40 && numberOfJoinery <= 80) {
                price *= 0.94;
            } else if (numberOfJoinery > 80) {
                price *= 0.90;
            }
            break;
        case "130X180":
            price = numberOfJoinery * 190;
            if (numberOfJoinery > 20 && numberOfJoinery <= 50) {
                price *= 0.93;
            } else if (numberOfJoinery > 50) {
                price *= 0.88;
            }
            break;
        case "200X300":
            price = numberOfJoinery * 250;
            if (numberOfJoinery > 25 && numberOfJoinery <= 50) {
                price *= 0.91;
            } else if (numberOfJoinery > 50) {
                price *= 0.86;
            }
            break;
    }
    if (receivingType === "With delivery") {
        price += 60;
    }
    if (numberOfJoinery > 99) {
        price *= 0.96;
    }
    if (numberOfJoinery < 10) {
        console.log("Invalid order");
    }else{
        console.log(`${price.toFixed(2)} BGN`);
    }
}
aluminumJoinery(['105',
'100X150',
'With delivery']);