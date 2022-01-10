function vegetableMarket(input){

    let priceOfVegetablesPerKg = Number(input[0]);
    let priceOfFruitsPerKg = Number(input[1]);
    let sumVegetablesKg = Number(input[2]);
    let sumFruitsKg = Number(input[3]);

    let sumPriceOfVegetables = priceOfVegetablesPerKg * sumVegetablesKg;
    let sumPriceOfFruits = priceOfFruitsPerKg * sumFruitsKg;

    let totalPrice = (sumPriceOfVegetables + sumPriceOfFruits) / 1.94;

    console.log(totalPrice.toFixed(2));

}
vegetableMarket(['0.194','19.4','10','10']);