function charityCampaign(input) {

    let numberOfDays = Number(input[0]);
    let numberOfPastryChefs = Number(input[1]);
    let numberOfCakes = Number(input[2]);
    let numberOfGofrettes = Number(input[3]);
    let numberOfPancakes = Number(input[4]);

    let cakesPricePerDay = numberOfCakes * 45;
    let gofrettesPricePerDay = numberOfGofrettes * 5.8;
    let pancakesPricePerDay = numberOfPancakes * 3.2;

    let sumPerDay = (cakesPricePerDay + gofrettesPricePerDay + pancakesPricePerDay) * numberOfPastryChefs;

    let totalMoney = sumPerDay * numberOfDays;

    let moneyAfterExpences = totalMoney - (totalMoney / 8);

    console.log(moneyAfterExpences);

}
charityCampaign(["23", "8", "14", "30", "16"]);