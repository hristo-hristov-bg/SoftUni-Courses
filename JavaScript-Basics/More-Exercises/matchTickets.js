function matchTickets(input) {

    let budget = Number(input[0]);
    let category = input[1];
    let numberOfPeople = Number(input[2]);
    let ticketPrice = 0;
    let transport = 0;
    let totalPrice = 0;

    switch (category) {
        case "VIP":
            ticketPrice = numberOfPeople * 499.99;
            break;
        case "Normal":
            ticketPrice = numberOfPeople * 249.99;
            break;
    }
    if (numberOfPeople <= 4) {
        transport = budget * 0.75;
    } else if (numberOfPeople > 4 && numberOfPeople <= 9) {
        transport = budget * 0.60;
    } else if (numberOfPeople > 9 && numberOfPeople <= 24) {
        transport = budget * 0.50;
    } else if (numberOfPeople > 24 && numberOfPeople <= 49) {
        transport = budget * 0.40;
    } else if (numberOfPeople > 49) {
        transport = budget * 0.25;
    }
    totalPrice = ticketPrice + transport;
    if (budget >= totalPrice) {
        console.log(`Yes! You have ${(budget - totalPrice).toFixed(2)} leva left.`);
    } else {
        console.log(`Not enough money! You need ${(totalPrice - budget).toFixed(2)} leva.`);
    }

}
matchTickets(['30000', 'VIP', '49']);