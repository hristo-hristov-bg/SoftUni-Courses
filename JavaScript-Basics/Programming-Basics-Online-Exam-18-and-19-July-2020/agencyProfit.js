function agencyProfit(input){

    let companyName = input[0];
    let adultTicketsNumber = Number(input[1]);
    let kidTicketsNumber = Number(input[2]);
    let adultTicketPrice = Number(input[3]);
    let customerServicePrice = Number(input[4]);

    let sumAdultPrice = 0;
    let kidTicketPrice = 0;
    let sumKidTicketsPrice = 0;
    let sum = 0;
    let profit = 0;
    
    sumAdultPrice = adultTicketsNumber * (adultTicketPrice + customerServicePrice);
    kidTicketPrice = (adultTicketPrice * 0.30) + customerServicePrice;
    sumKidTicketsPrice = kidTicketsNumber * kidTicketPrice;
    sum = sumAdultPrice + sumKidTicketsPrice;
    profit = sum * 0.2;

    console.log(`The profit of your agency from ${companyName} tickets is ${profit.toFixed(2)} lv.`);
}
agencyProfit(['Ryanair',
    '60',
    '23',
    '158.96',
    '39.12']);