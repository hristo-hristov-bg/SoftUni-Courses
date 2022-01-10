function fishingBoat(input){

    let budget = Number(input[0]);
    let season = input[1];
    let fishersCount = Number(input[2]);

    let rentPrice = 0;

    if (season === "Spring"){
        rentPrice = 3000;
    } else if (season === "Summer" || season === "Autumn"){
        rentPrice = 4200;
    }else if (season === "Winter"){
        rentPrice = 2600;
    }

    if (fishersCount <= 6){
        rentPrice = rentPrice * 0.90;
    } else if (fishersCount >= 7 && fishersCount <= 11){
        rentPrice = rentPrice * 0.85;
    } else if (fishersCount >= 12){
        rentPrice = rentPrice * 0.75;
    }

    if (fishersCount % 2 == 0 && season != "Autumn"){
        rentPrice = rentPrice * 0.95;
    }

    if (budget >= rentPrice){
        console.log(`Yes! You have ${(budget - rentPrice).toFixed(2)} leva left.`)
    } else if (budget < rentPrice){
        console.log(`Not enough money! You need ${(rentPrice - budget).toFixed(2)} leva.`)
    }
}
fishingBoat(["2000",
"Winter",
"13"])