function fruitMarket(input){

    let strawburryPrice = Number(input[0]);
    let bannanaKilograms = Number(input[1]);
    let orangesKilograms = Number(input[2]);
    let raspberriesKilograms = Number(input[3]);
    let strawburryKilograms = Number(input[4]);

    let raspberriesPrice = strawburryPrice / 2;
    let orangesPrice = raspberriesPrice - (raspberriesPrice * 0.4);
    let bannaPrice = raspberriesPrice - (raspberriesPrice * 0.8);

    let sumForRaspberries = raspberriesKilograms * raspberriesPrice;
    let sumForOranges = orangesPrice * orangesKilograms;
    let sumForBannanas = bannanaKilograms * bannaPrice;
    let sumForStrawburry = strawburryPrice * strawburryKilograms;

    let totalSum = sumForRaspberries + sumForOranges + sumForBannanas + sumForStrawburry;

    console.log(totalSum);
}
fruitMarket(["48","10","3.3","6.5","1.7"]);