function fishland(input){

    let mackerelPrice = Number(input[0]);
    let toyPrice = Number(input[1]);
    let kgBonito = Number(input[2]);
    let kgHorseMackerel = Number(input[3]);
    let kgSeaFood = Number(input[4]);

    let bonitoPrice = mackerelPrice + (mackerelPrice * 0.6);
    let bonitoSumPrice = bonitoPrice * kgBonito;
    let horseMeckerelPrice = toyPrice + (toyPrice * 0.8);
    let horseMeckerelSumPrice = horseMeckerelPrice * kgHorseMackerel;
    let seaFoodSumPrice = kgSeaFood * 7.50;

    let finalBill = bonitoSumPrice + horseMeckerelSumPrice + seaFoodSumPrice;

    console.log(finalBill.toFixed(2));

}
fishland(['6.90','4.20','1.5','2.5','1']);