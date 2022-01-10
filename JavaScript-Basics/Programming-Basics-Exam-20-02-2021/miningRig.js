function miningRig (input){

    let videoCardPrice = Number(input[0]);
    let adapterPrice = Number(input[1]);
    let electricityPricePerDay = Number(input[2]);
    let profitPerDay = Number(input[3]);

    let priceCardsSum = videoCardPrice * 13;
    let adapersSumPrice = adapterPrice * 13;
    let spendMoneySum = priceCardsSum + adapersSumPrice +1000;
    let profitAfterElectricity = profitPerDay - electricityPricePerDay;
    let cardsProfitPerDaySum = 13 * profitAfterElectricity;
    let spendingsComingBack = spendMoneySum/cardsProfitPerDaySum;

    console.log(spendMoneySum);
    console.log(Math.ceil(spendingsComingBack));

}
miningRig(["800",
"10",
"0.32",
"6.4"]);