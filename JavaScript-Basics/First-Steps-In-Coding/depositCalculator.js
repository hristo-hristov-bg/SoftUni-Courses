function depositCalculator(input){

    let sumOfDeposit = Number(input[0]);
    let depositTerm = Number(input[1]);
    let yearPercentage = Number(input[2]);

    let sum = sumOfDeposit + (depositTerm * (((sumOfDeposit * yearPercentage)/100) / 12));

    console.log(sum);

}
depositCalculator([`2350`,`6`,`7`]);