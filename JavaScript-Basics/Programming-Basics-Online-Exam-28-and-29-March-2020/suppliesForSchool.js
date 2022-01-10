function suppliesForSchool(input){

    let pensCount = Number(input[0]);
    let markersCount = Number(input[1]);
    let cleaningSolution = Number(input[2]);
    let discount = Number(input[3]);

    let pensPrice = pensCount * 5.80;
    let markersPrice = markersCount * 7.20;
    let solutionPrice = cleaningSolution * 1.20;
    let sum = pensPrice + markersPrice + solutionPrice;
    let priceToPay = sum - ((sum * discount)/ 100);

    console.log(priceToPay.toFixed(3));

}
suppliesForSchool(['7','8','0.5','45']);