function toyShop(input){

    let holidayPrice = Number(input[0]);
    let numOfPuzzles = Number(input[1]);
    let numOfTalkingDolls = Number(input[2]);
    let numOfBears = Number(input[3]);
    let numOfMinions = Number(input[4]);
    let numOfTrucks = Number(input[5]);

    let countNumOfToys = numOfPuzzles + numOfTalkingDolls + numOfBears + numOfMinions + numOfTrucks;
    let toysOrder = numOfPuzzles * 2.60 + numOfTalkingDolls * 3 + numOfBears * 4.10 + numOfMinions * 8.20 + numOfTrucks * 2;

    if (countNumOfToys >= 50) {
        toysOrder = toysOrder * 0.75;
    }
    
    toysOrder = toysOrder * 0.90;

    if (toysOrder >= holidayPrice){
        console.log(`Yes! ${(toysOrder - holidayPrice).toFixed(2)} lv left.`)
    } else {
        console.log(`Not enough money! ${Math.abs(toysOrder - holidayPrice).toFixed(2)} lv needed.`)
    }

}
toyShop(["320", "8", "2", "5", "5", "1"]);