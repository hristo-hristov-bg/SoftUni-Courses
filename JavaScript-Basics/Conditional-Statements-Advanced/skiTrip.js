function skiTrip(input) {

    let days = Number(input[0]);
    let roomType = input[1];
    let feedback = input[2];

    let nights = days - 1;

    let price = 0;

    if (roomType == "room for one person") {
        price = nights * 18.00;
    } else if (roomType == "apartment") {
        price = nights * 25.00;
    } else if (roomType == "president apartment") {
        price = nights * 35.00;
    }

    if (nights < 10 && roomType == "apartment") {
        price = price * 0.70;
    } else if (nights >= 10 && nights <= 15 && roomType == "apartment") {
        price = price * 0.65;
    } else if (nights > 15 && roomType == "apartment") {
        price = price * 0.50;
    } else if (nights < 10 && roomType == "president apartment") {
        price = price * 0.90;
    } else if (nights >= 10 && nights <= 15 && roomType == "president apartment") {
        price = price * 0.85;
    } else if (nights > 15 && roomType == "president apartment") {
        price = price * 0.80;
    }

    if (feedback == "positive") {
        price = price * 1.25;
    } else {
        price = price * 0.90;
    }

    console.log(price.toFixed(2));
}
skiTrip(["2", "apartment", "positive"]);