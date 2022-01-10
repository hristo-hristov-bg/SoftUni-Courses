function coins(input) {

    let cents = Number(input[0] * 100);
    let coinsNumber = 0;

    while (coins !== 0) {
        if (cents - 200 >= 0) {
            coinsNumber++;
            cents-= 200;
        }else if (cents - 100 >= 0){
            coinsNumber++;
            cents-= 100;
        }else if (cents - 50 >= 0){
            coinsNumber++;
            cents-= 50;
        }else if (cents - 20 >= 0){
            coinsNumber++;
            cents-= 20;
        }else if (cents - 10 >= 0){
            coinsNumber++;
            cents-= 10;
        }else if (cents - 5 >= 0){
            coinsNumber++;
            cents-= 5;
        }else if (cents - 2 >= 0){
            coinsNumber++;
            cents-= 2;
        }else if (cents - 1 >= 0){
            coinsNumber++;
            cents-= 1;
        }else {
            break;
        }
    }
    console.log(coinsNumber);
}       
coins(["0.56"])